//Generating content inside the first container
for (const items of data) {
    //create elements------------------------------------------------------------------
    let dataDiv = document.createElement('div');
    let pDescription = document.createElement('p');
    let pNumber = document.createElement('p');
    //add classes--------------------------------------------------------------------
    dataDiv.classList.add('data');
    pDescription.classList.add('data-description');
    pNumber.classList.add('data-number');
    //append as necessary----------------------------------------------------------
    dataDiv.append(pDescription);
    dataDiv.append(pNumber);
    dataDivMain.append(dataDiv);
    //fill in with content from the database----------------------------------------
    pDescription.innerHTML = items.dataDescription;
    pNumber.innerHTML = items.dataNumber;
}

//Generating content inside the third container
for (const items of areaOfWork) {
    //create elements---------------------------------------------------------------
    let workContainer = document.createElement('div');
    let workAreaDiv = document.createElement('div');
    let hideWorkContainer = document.createElement('div');
    let workIcon = document.createElement('div');
    let workTitle = document.createElement('div');
    let imgIcon = document.createElement('img');
    let pTitle = document.createElement('p');
    let workDescription = document.createElement('div');
    let workArrow = document.createElement('div');
    let pBody = document.createElement('p');
    let imgArrow = document.createElement('img');
    //add classes--------------------------------------------------------------------
    workContainer.classList.add('work-container');
    workAreaDiv.classList.add('work-area-div');
    hideWorkContainer.classList.add('hide-work-description');
    workIcon.classList.add('work-icon');
    workTitle.classList.add('work-title');
    imgIcon.classList.add('img-icon');
    // pTitle.classList.add('');
    workDescription.classList.add('work-description');
    workArrow.classList.add('work-arrow');
    //pBody.classList.add('');
    imgArrow.classList.add('arrow-icon');
    //append as necessary------------------------------------------------------------
    workIcon.append(imgIcon);
    workTitle.append(pTitle);
    workAreaDiv.append(workIcon, workTitle);
    workDescription.append(pBody);
    workArrow.append(imgArrow);
    hideWorkContainer.append(workDescription, workArrow);
        //append workAreaDiv and hideWorkContainer
    workContainer.append(workAreaDiv, hideWorkContainer);
        //append the above to the main from the selector
    workContainerOuter.append(workContainer);
    //fill in with content from the database------------------------------------------
    imgIcon.setAttribute('src', items.icon);
    pTitle.innerHTML = items.title;
    pBody.innerHTML = items.body;
    imgArrow.setAttribute('src', items.arrow);
}

//Generating content inside the fourth container
for (const items of energyData) {
    //create elements------------------------------------------------------------
    let ourDataInner = document.createElement('div');
    let graph = document.createElement('div');
    let graphImg = document.createElement('div');
    let graphTotalDiv = document.createElement('div');
    let graphChart = document.createElement('img');
    let graphTitle = document.createElement('p');
    let energyType = document.createElement('p');
    let graphTotal = document.createElement('p');
    let graphHighlight = document.createElement('p');
    //add classes----------------------------------------------------------------
    ourDataInner.classList.add('our-data-inner');
    graph.classList.add('graph');
    graphImg.classList.add('graph-img');
    graphTotalDiv.classList.add('graph-total-div');
    graphTitle.classList.add('graph-title');
    energyType.classList.add('energy-type');
    graphTotal.classList.add('graph-total');
    graphHighlight.classList.add('graph-highlight');
    //append as necessary---------------------------------------------------------------
    graph.append(graphTitle, energyType);
    graphImg.append();
    graphTotalDiv.append(graphTotal, graphHighlight)
        //append all three divs above to the ourDataInner
    ourDataInner.append(graph, graphImg, graphTotalDiv);
        //append div above to selected ourData
    ourData.append(ourDataInner);
    //fill in the containers with the content fromt he database----------------------------
    graphTitle.innerHTML = items.title;
    energyType.innerHTML = items.energy;
    graphTotal.innerHTML = items.total;
    graphHighlight.innerHTML = items.percentage;
}

//Generating content inside the fifth container
for (const items of report) {
    //create elements----------------------------------------------------------
        //create the divs
    let articleDiv = document.createElement('div');
    let articleDateType = document.createElement('div');
    let articleHeadingBody = document.createElement('div');
    let articleMetadata = document.createElement('div');
        //create the p, h4, div and img
    let articleType = document.createElement('p');
    let articleDate = document.createElement('p');
    let articleHeading = document.createElement('h4');
    let articleBody = document.createElement('p');
    let creatorImageDiv = document.createElement('div');
    let creatorImage;
    let creatorNameDiv = document.createElement('div');
    let creatorName = document.createElement('p');
        //special: create img element, add it's classlist, append to html and set it's attribute
        for(var i = 0; i < items.img.length; i++){
            creatorImage = document.createElement('img');
            creatorImage.classList.add('creator-img');
            creatorImageDiv.append(creatorImage);
            creatorImage.setAttribute('src', items.img[i]);
            console.log(items.img[i])
            console.log("--------------")
        }
    //add classes to the elements-------------------------------------------------
        //main outer div. Three divs is attached to this
    articleDiv.classList.add('articles-div')
        //Date and type
    articleDateType.classList.add('article-date-type');
    articleType.classList.add('article-type');
    articleDate.classList.add('article-date');
        //Body and description
    articleHeadingBody.classList.add('article-heading-body');
    articleHeading.classList.add('article-heading');
    articleBody.classList.add('article-body');
        //creator images and name
    articleMetadata.classList.add('article-metadata');
    creatorImageDiv.classList.add('article-creator-image');
    creatorNameDiv.classList.add('article-creator-names"');
    creatorName.classList.add('creator-names');
    //append as necessary----------------------------------------------------------
     //container1
    articleDateType.append(articleType, articleDate);
     //container2
    articleHeadingBody.append(articleHeading, articleBody);
     //container3
    articleMetadata.append(creatorImageDiv, creatorNameDiv);
            //container3 subcontainers
    creatorNameDiv.append(creatorName);
     //main container
    articleDiv.append(articleDateType, articleHeadingBody, articleMetadata);
    articleDivOuter.append(articleDiv);
    //fill in the containers with the content from the database-------------------------
    articleType.innerHTML = items.type;
    articleDate.innerHTML = items.date;
    articleHeading.innerHTML = items.title;
    articleBody.innerHTML = items.body;
    creatorImage.setAttribute('src', "");
    creatorName.innerHTML = items.creators;
}

//generic function to generate content
function generateContent(elementType, appendTo, classToAdd, innerContent, setAttributeImg, setBackground){
    let variableName;
    //create element
    variableName = document.createElement(elementType);
    //append as necessary
    if(appendTo) appendTo.append(variableName);
    //add classes
    if(classToAdd) variableName.classList.add(classToAdd);
    //fill in with content from database
    if(innerContent) variableName.innerHTML = innerContent;
    //set src attribute on image tag
    if(setAttributeImg) variableName.setAttribute('src', setAttributeImg);
    //set background image if necessary
    if(setBackground) variableName.style.backgroundImage = `url(${setBackground})`;

    //return variable created from the function
    return variableName;
}