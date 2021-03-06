const navbar = document.querySelector(".nav");
const sidebar = document.querySelector(".sidebar");
const head = document.querySelector("head");

// Adding navbar to the page

navbar.innerHTML =
  '<p class="nav-title"><a href="/"> ⚡ LibreUI </a><span class="text-sm">v1.0</span></p><div class="nav-pills"><a href="/installation/installation.html">Docs</a><a href="https://github.com/Logan1x/LibreUI"><i class="fab fa-github"></i></a><a href="https://twitter.com/herkuch"><i class="fab fa-twitter"></i></a></div>';

// Adding sidebar to the page

sidebar.innerHTML =
  '<div class="sidebar-lists"><p class="sidebar-title">Quick Start</p><a href="../installation/installation.html">Installation</a><a href="../colors/colors.html">Colors</a><a href="../typography/typography.html">Typography</a><a href="../customize/customize.html">Customize</a><a href="../contribute/contribute.html">Contribute</a><hr /><p class="sidebar-title">Components</p><a href="../alert/alert.html">Alert</a><a href="../avatar/avatar.html">Avatar</a><a href="../badge/badge.html">Bagde</a><a href="../button/button.html">Buttons</a><a href="../cards/cards.html">Cards</a><a href="../chips/chips.html">Chips</a><a href="../image/image.html">Images</a><a href="../input/input.html">Input</a><a href="../toast/toast.html">Toast</a><a href="../grid/grid.html">Grid</a><a href="../modal/modal.html">Modal</a><a href="../navigation/navigation.html">Navigation</a><a href="../list/list.html">List</a><a href="../rating/rating.html">Rating</a></div>';

// Adding favicon meta tags

const favicon = document.createElement("link");
favicon.rel = "shortcut icon";
favicon.href = "../../assets/favicon.ico";
head.appendChild(favicon);
