const tabItem = document.querySelectorAll('.tab_item');
const tabContent = document.querySelectorAll('.tab_content');

tabItem.forEach(function(el) {
    el.addEventListener('click', activeTab);
})

function activeTab() {
    tabItem.forEach(function(el) {
        el.classList.remove('active');
    })
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');
    console.log(tabName);
     activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContent.forEach(function(it){
        if (it.classList.contains(tabName)) {
            it.classList.add('active') 
        } else {
            it.classList.remove('active');
        }
    })

}
