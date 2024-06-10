let FocusSearch = document.getElementById('focus-search');
let CrossIcon = document.getElementById('cross-mark');
let HrIcon = document.getElementById('hr-mark');
FocusSearch.addEventListener('click' , function(){
    CrossIcon.style.display = 'block';
    HrIcon.style.display = 'block';


    document.addEventListener('click', function(event) {
        if (!FocusSearch.contains(event.target) && !CrossIcon.contains(event.target)) {
            CrossIcon.style.display = 'none';
            HrIcon.style.display = 'none';
        }
    });
})


CrossIcon.addEventListener('click' , function(){
    FocusSearch.value = "";
}
)
