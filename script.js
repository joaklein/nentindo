document.addEventListener('DOMContentLoaded', () => {

    // NAVIGATION DECLARATIONS

    const categoryDropdown = document.querySelectorAll('.category-dropdown')
    const search = document.querySelector('#search')
    const dropdownTop = document.querySelector('#dropdown-top')
    const dropdownTopContent = document.querySelector('#dropdown-top-content')
    const dropdownCloseTop = document.querySelector('.dropdown-close-top')
    const navBottomLinks = document.querySelector('.nav-bottom-link-wrapper').children
    const dropdownBottom = document.querySelector('#dropdown-bottom')
    const dropdownClose = document.querySelectorAll('.dropdown-close')
    const dropdownStore = document.querySelector('#dropdown-store')
    const dropdownGames = document.querySelector('#dropdown-games')
    const dropdownSwitch = document.querySelector('#dropdown-switch')
    const dropdownPlay = document.querySelector('#dropdown-play')

    // NAVIGATION FUNCTIONS

    function toggleDropdown(el) {
        if (!el.classList.contains('expand-dropdown')) {
            for (let i of dropdownBottom.children) {
                i.classList.remove('expand-dropdown')
            }
        } else {
            dropdownBottom.classList.remove('expand-bottom')
        }
        el.classList.toggle('expand-dropdown')
    }

    function toggleActive(el) {
        if (el.parentElement.classList.contains('nav-bottom-link-wrapper')) {
            if (!el.classList.contains('active')) {
                for (let link of navBottomLinks) {
                    if (link.nodeName == 'BUTTON') {
                        link.classList.remove('active')
                        link.querySelector('.fa-angle-down').classList.remove('rotate-180-cw')
                    }
                }
            }
            el.classList.toggle('active')
            el.querySelector('.fa-angle-down').classList.toggle('rotate-180-cw')
        } else if (el.parentElement.classList.contains('category-wrapper')) {
            if (!el.classList.contains('active')) {
                for (let list of categoryDropdown) {
                    list.classList.remove('active')
                    list.querySelector('.fa-angle-down').classList.remove('rotate-180-cw')
                    list.nextElementSibling.classList.remove('expand')
                }
            }
            el.classList.toggle('active')
            el.querySelector('.fa-angle-down').classList.toggle('rotate-180-cw')
            el.nextElementSibling.classList.toggle('expand')
        }
    }

    // NAVIGATION EVENTS & LISTENERS

    search.addEventListener('click', () => {
        dropdownTop.classList.add('expand-top')
        dropdownTopContent.classList.add('expand-dropdown-top')
    })

    dropdownCloseTop.addEventListener('click', () => {
        dropdownTop.classList.remove('expand-top')
        dropdownTopContent.classList.remove('expand-dropdown-top')

    })

    for (let list of categoryDropdown) {
        let categoryItems = list.nextElementSibling.getElementsByTagName('li')
        let categoryList = list.nextElementSibling

        list.addEventListener('click', () => {
            toggleActive(list)
        })

        for (let item of categoryItems) {
            item.addEventListener('click', () => {
                list.classList.remove('active')
                categoryList.classList.remove('expand')
                list.querySelector('p').innerText = item.innerText
                list.querySelector('.fa-angle-down').classList.remove('rotate-180-cw')
            })
        }
    }

    for (let link of navBottomLinks) {
        if (link.nodeName == 'BUTTON') {
            link.addEventListener('click', () => {
                dropdownBottom.classList.add('expand-bottom')
                toggleActive(link)
                if (link.id === 'link-store') {
                    toggleDropdown(dropdownStore)
                } else if (link.id === 'link-games') {
                    toggleDropdown(dropdownGames)
                } else if (link.id === 'link-switch') {
                    toggleDropdown(dropdownSwitch)
                } else if (link.id === 'link-play') {
                    toggleDropdown(dropdownPlay)
                }
            })
        }
    }

    for (let close of dropdownClose) {
        close.addEventListener('click', () => {
            dropdownBottom.classList.remove('expand-bottom')

            for (let child of dropdownBottom.children) {
                child.classList.remove('expand-dropdown')
            }

            for (let link of navBottomLinks) {
                link.classList.remove('active')
                link.children[1].classList.remove('rotate-180-cw')
            }
        })
    }

    // IMAGE CAROUSEL DECLARATIONS

    const carouselImgLarge = document.querySelector('#carousel-img-large')
    let carouselImages = document.querySelector('.carousel-img-gallery').children

    // IMAGE CAROUSEL FUNCTIONS

    for (let thumbnail of carouselImages) {
        thumbnail.addEventListener('click', () => {
            carouselImgLarge.src = thumbnail.src
        })
    }

    // 'MORE LIKE THIS' SLIDER DECLARATIONS

    const sliderScrollLeftBtn = document.querySelector('.slider-scroll-left')
    const sliderScrollRightBtn = document.querySelector('.slider-scroll-right')
    const slider = document.querySelector('.more-like-this-slider')
    const sliderCards = document.querySelectorAll('.slider-card')
    let scrollIncrement = 0

    // 'MORE LIKE THIS' SLIDER FUNCTIONS

    sliderScrollLeftBtn.addEventListener('click', () => {
        scrollIncrement -= 3
        if (scrollIncrement < 3) {
            scrollIncrement = 0
            sliderScrollLeftBtn.classList.remove('slider-scroll-left-show')
        }

        slider.scrollLeft = sliderCards[scrollIncrement].offsetLeft

        if (scrollIncrement < sliderCards.length) {
            sliderScrollRightBtn.classList.remove('slider-scroll-right-hide')
        }
    })

    sliderScrollRightBtn.addEventListener('click', () => {
        scrollIncrement += 3
        if (scrollIncrement > sliderCards.length - 3) {
            scrollIncrement = sliderCards.length - 1
            sliderScrollRightBtn.classList.add('slider-scroll-right-hide')
        }

        slider.scrollLeft = sliderCards[scrollIncrement].offsetLeft

        if (scrollIncrement > 0) {
            sliderScrollLeftBtn.classList.add('slider-scroll-left-show')
        }
    })

})