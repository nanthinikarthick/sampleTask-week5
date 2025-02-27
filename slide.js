const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('#left-arrow');
 const rightArrow = document.querySelector('#right-arrow');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < indicatorParents.children.length - 1) ? sectionIndex + 1 : indicatorParents.children.length - 1;
    indicatorParents.children[sectionIndex].classList.add('selected');
    setIndex();
});
