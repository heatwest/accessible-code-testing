/* Remove ARIA menu roles and properties from navigation with a delay to allow navigation to load first */

var delayScript = 1000;

setTimeout (function(){
    /* remove role from main nav <ul> */
    document
        .getElementsByClassName("comm-navigation__list")[0]
        .removeAttribute("role");

    /* remove roles from nav <li>s */
    document
        .getElementsByClassName("slds-is-relative slds-list__item")[0]
        .removeAttribute("role");

    var cls = document.getElementsByClassName(
        "slds-is-relative slds-list__item"
    );

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("role");
    }

    /* remove roles from nav <button>s */
    document
        .getElementsByClassName(
        "slds-container_fluid slds-button slds-button--reset"
        )[0]
        .removeAttribute("role");

    var cls = document.getElementsByClassName(
        "slds-container_fluid slds-button slds-button--reset"
    );

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("role");
    }

    /* remove aria-haspopup from <button>s */
    document
        .getElementsByClassName(
        "slds-container_fluid slds-button slds-button--reset"
        )[0]
        .removeAttribute("aria-haspopup");

    var cls = document.getElementsByClassName(
        "slds-container_fluid slds-button slds-button--reset"
    );

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("aria-haspopup");
    }

    /* remove roles from submenu <ul>s */
    document
        .getElementsByClassName(
        "slds-list_vertical slds-is-nested slds-hide"
        )[0]
        .removeAttribute("role");

    var cls = document.getElementsByClassName(
        "slds-list_vertical slds-is-nested slds-hide"
    );

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("role");
    }

    /* remove roles from submenu <li>s */
    document
        .getElementsByClassName("slds-list__item")[0]
        .removeAttribute("role");

    var cls = document.getElementsByClassName("slds-list__item");

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("role");
    }

    /* remove roles from first-level <a>s */
    document
        .getElementsByClassName(
        "slds-container_fluid slds-truncate slds-is-active"
        )[0]
        .removeAttribute("role");

    var cls = document.getElementsByClassName(
        "slds-container_fluid slds-truncate slds-is-active"
    );

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("role");
    }

    /* remove roles from sub-menu <a>s */
    document
        .getElementsByClassName("slds-container_fluid slds-truncate")[0]
        .removeAttribute("role");

    var cls = document.getElementsByClassName(
        "slds-container_fluid slds-truncate"
    );

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute("role");
    }

    /* remove redundant role on main <nav> */
    document
    .querySelectorAll("nav.slds-has-flexi-truncate")[0].removeAttribute("role");
        
    /* add unique name to main <nav> */
        document
    .querySelectorAll("nav.slds-has-flexi-truncate")[0].setAttribute("aria-label", "Main");
}, delayScript);