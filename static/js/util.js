/*
 * IMPORTANT--REMINDER:
 * 1. targetClass needs to be attached to <ul> in [pagelist] and [page nav] area.
 * 2. classes with 'c-' are self-defined classes that are related with js codes.
 * 3. currentPage is stored in [aria-current] attribute in [<ul class='pagination ... ...'>]
 */

const MAXIUM_PAGE_ITEMS = 10;

/**
 * 
 * @param {Number} toPage When click, which page to nav to
 * @param {String} contentQuerySelector Your main contents to get navigated, Eg: blog lists that have common <div>
 * @param {String} paginationQuerySelector Where the outmost elem of your navigationBar is, Eg: <ul class="pagination" aria-current="1"> 
 * @param {String} currentPageAttribute The attribute that stores current page number, Eg: aria-current
 */

function newPageNav(toPage, contentQuerySelector, paginationQuerySelector, currentPageAttribute){
    var arr = document.querySelectorAll(contentQuerySelector);
    var start = MAXIUM_PAGE_ITEMS * (toPage-1);     // 5 * (1-1) = 0 | 5 * (2-1) = 5    Included
    var end = start + MAXIUM_PAGE_ITEMS;            // 0 + 5 = 5 | 5 + 5 = 10           NotIncluded
    var currentElem = document.querySelector(paginationQuerySelector);
    // NOTICE: currentPage is stored in [aria-current] attribute in [<ul class='pagination ... ...'>]
    var currentPage = Number.parseInt(currentElem.getAttribute(currentPageAttribute));
    var currentStart = MAXIUM_PAGE_ITEMS * (currentPage-1);
    var currentEnd = currentStart + MAXIUM_PAGE_ITEMS;

    currentEnd = currentEnd > arr.length? arr.length: currentEnd;
    end = end > arr.length? arr.length: end;
    console.log(start, end, currentStart, currentEnd);
    // set invisibility of currentPage
    for(var _ = currentStart; _ < currentEnd; _ ++) {
        arr[_].style.display = 'none';
    }
    // set visibility of toPage
    for(var _ = start; _ < end; _ ++) {
        arr[_].style.removeProperty('display');
    }
    currentElem.setAttribute(currentPageAttribute, toPage);
    newGeneratePagination(toPage, contentQuerySelector, paginationQuerySelector, currentPageAttribute);
}

function newGeneratePagination(toPage, contentQuerySelector, paginationQuerySelector, currentPageAttribute){
    function getPageNavString(toPage, contentQuerySelector, paginationQuerySelector, currentPageAttribute) {
        return 'newPageNav('+toPage+',\''+contentQuerySelector+'\',\''+paginationQuerySelector+'\',\''+currentPageAttribute+'\');';
    }
    var pageNums = Math.ceil(document.querySelectorAll(contentQuerySelector).length/MAXIUM_PAGE_ITEMS);
    var pageElem = document.querySelector(paginationQuerySelector);
    // the << button
    var implement = `
        <li class="page-item">
            <a class="page-link`+(toPage==1?' disabled':'')+`"
            href="#" aria-label="Previous" `+ (toPage-1>=1?'onclick="'+ getPageNavString(toPage-1, contentQuerySelector, paginationQuerySelector, currentPageAttribute) +'"':'') +`>
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
            </a>
        </li>
    `;
    // the >> button
    var lastImplement = `
        <li class="page-item">
            <a class="page-link`+ (toPage==pageNums?' disabled':'')+`"
            href="#" aria-label="Next" `+ (toPage+1<=pageNums?'onclick="'+ getPageNavString(toPage+1, contentQuerySelector, paginationQuerySelector, currentPageAttribute) +'"':'') +`>
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
            </a>
        </li>
    `;
    // number buttons
    for(var _ = 1; _ <= pageNums; _ ++) {
        implement += '<li class="page-item'+(_==toPage?' active':'')+'"><a class="page-link" href="#" onclick="'+(getPageNavString(_, contentQuerySelector, paginationQuerySelector, currentPageAttribute))+'">'+_+'</a></li>';
    }
    // combine
    implement += lastImplement;
    pageElem.innerHTML = implement;  
}

function unitScrollInit(){
    function unitScroll(){
        if (document.body.scrollTop == 0){
            clearInterval(intervalController); return;
        } else {
            window.scrollBy(0, -Math.ceil(document.body.scrollTop/10)); return;
        }
    }
    var intervalController = window.setInterval(unitScroll, 10);
}