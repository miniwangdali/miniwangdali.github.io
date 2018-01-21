const divider = "--------------------------------------------------------------------------------";

const cellParser = cellString => {
    const courseNumberRegex = /(([A-Z][A-Z]+) )+[0-9A-Z]+/g;
    const individualRelationRegex = /<B[ ]*>[ ]*[O|R|&]+[ ]*<\/B>/g;
    const embededRelationRegex = /<B[ ]*><U[ ]*>[ ]*((OR)|(&))[ ]*<\/B><\/U>/g;
    const creditRegex = /\([0-9]+\)/g;
    const resultCourseList = {
        relations: [],
        items: []
    };
    const individualRelations = cellString.match(individualRelationRegex);
    if (individualRelations) {
        individualRelations.forEach(relation => {
            if (relation.indexOf("OR") !== -1) {
                resultCourseList.relations.push("OR");
            } else if (relation.indexOf("&") !== -1 || relation.indexOf("AND") !== -1) {
                resultCourseList.relations.push("&");
            }
        });
    }
    
    cellString.split(individualRelationRegex).forEach(item => {
        const courseNumbers = item.match(courseNumberRegex);
        if (!item.match(creditRegex)) {
            // no course required
            resultCourseList.items.push({
                title: item.trim()
            });
        } else if (courseNumbers.length === 1) {
            const course = {
                number: courseNumbers[0],
                title: item.replace(courseNumberRegex, "").replace(creditRegex, "").trim(),
                credit: parseFloat(item.match(creditRegex)[0].match(/[0-9.0-9]+/)[0])
            };
            const sameAsIndex = item.indexOf("same as");
            if (sameAsIndex !== -1) {
                course.title = item.substring(0, sameAsIndex).replace(courseNumberRegex, "").replace(creditRegex, "").trim();
                course.sameAsNumber = item.substring(sameAsIndex + "same as: ".length, item.indexOf("\n")).trim().toUpperCase();
            }
            resultCourseList.items.push(course);
        } else {
            const courses = [];
            const relations = [];
            const indexList = [];
            courseNumbers.forEach(number => {
                indexList.push({
                    start: item.indexOf(number),
                    length: number.length
                });
            });
            for (let i = 0; i < indexList.length; i ++) {
                if (i !== indexList.length - 1) {
                    let courseString = item.substring(indexList[i].start + indexList[i].length, indexList[i + 1].start);
                    const embededRelations = courseString.match(embededRelationRegex);
                    courseString = courseString.replace(embededRelationRegex, "");
                    if (embededRelations) {
                        embededRelations.forEach(relation => {
                            if (relation.indexOf("OR") !== -1) {
                                relations.push("OR");
                            } else if (relation.indexOf("&") !== -1 || relation.indexOf("AND") !== -1) {
                                relations.push("&");
                            }
                        });
                    }
                    const course = {
                        number: courseNumbers[i],
                        title: courseString.replace(creditRegex, "").trim(),
                        credit: parseFloat(courseString.match(creditRegex)[0].match(/[0-9.0-9]+/)[0])
                    }
                    const sameAsIndex = courseString.indexOf("same as");
                    if (sameAsIndex !== -1) {
                        course.title = courseString.substring(0, sameAsIndex).replace(creditRegex, "").trim();
                        course.sameAsNumber = courseString.substring(sameAsIndex + "same as: ".length, courseString.indexOf("\n")).trim().toUpperCase();
                    }
                    courses.push(course);
                } else {
                    const courseString = item.substring(indexList[i].start + indexList[i].length);
                    const course = {
                        number: courseNumbers[i],
                        title: courseString.replace(creditRegex, "").trim(),
                        credit: parseFloat(courseString.match(creditRegex)[0].match(/[0-9.0-9]+/)[0])
                    };
                    const sameAsIndex = courseString.indexOf("same as");
                    if (sameAsIndex !== -1) {
                        course.title = courseString.substring(0, sameAsIndex).replace(creditRegex, "").trim();
                        course.sameAsNumber = courseString.substring(sameAsIndex + "same as: ".length, courseString.indexOf("\n")).trim().toUpperCase();
                    }
                    courses.push(course);
                }
            }
            
            resultCourseList.items.push({
                relations: relations,
                courses: courses
            });
        }
    });
    
    return resultCourseList;
};

const analyzeDoc = doc => {
    const contentStartIndex = doc.indexOf("<PRE>");
    const contentEndIndex = doc.indexOf("</PRE>");
    const content = doc.substring(contentStartIndex + 5, contentEndIndex);
    const firstDividerIndex = content.indexOf(divider);
    const instruction = content.substring(0, firstDividerIndex);
    const blockList = content.split(divider);
    const tableList = [];
    for (let i = 1; i < blockList.length - 1; i ++) {
        if (blockList[i].indexOf('<b>') !== -1) {
            tableList.push({
                titleBlock: blockList[i].trim(),
                subBlock: []
            });
        } else {
            tableList[tableList.length - 1].subBlock.push({
                content: blockList[i].trim()
            });
        }
    }
    tableList.forEach(table => {
        const blockItemList = [];
        table.subBlock.forEach(block => {
            const rowList = block.content.split("\n");
            let leftCell = "";
            let rightCell = "";
            rowList.forEach(row => {
                const rowBuffer = row.split("|");
                rowBuffer[0] = rowBuffer[0].trim();
                rowBuffer[1] = rowBuffer[1].trim();
                if (rowBuffer[0].indexOf("Same as") !== -1) {
                    rowBuffer[0] = rowBuffer[0].substring(0, rowBuffer[0].indexOf("Same as")) 
                                    + rowBuffer[0].substring(rowBuffer[0].indexOf("Same as")).toLowerCase().trim() + "\n";
                }
                if (rowBuffer[1].indexOf("Same as") !== -1) {
                    rowBuffer[1] = rowBuffer[1].substring(0, rowBuffer[1].indexOf("Same as")) 
                                    + rowBuffer[1].substring(rowBuffer[1].indexOf("Same as")).toLowerCase().trim() + "\n";
                }
                leftCell = leftCell + rowBuffer[0];
                rightCell = rightCell + rowBuffer[1];
            });
            const fromCell = cellParser(leftCell);
            const toCell = cellParser(rightCell);
            blockItemList.push({
                from: fromCell,
                to: toCell
            });
        });
        table.results = blockItemList;
    });
    return {tables : tableList};
};
