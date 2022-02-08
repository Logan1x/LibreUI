const navbar = document.querySelector(".nav");
const sidebar = document.querySelector(".sidebar");

navbar.innerHTML =
  '<p class="nav-title"><a href="/"> ⚡ LibreUI </a><span class="text-sm">v1.0</span></p><div class="nav-pills"><a href="/installation/installation.html">Docs</a><i class="fab fa-github"></i><i class="fab fa-twitter"></i></div>';

sidebar.innerHTML =
  '<div class="sidebar-lists"><p class="sidebar-title">Quick Start</p><a href="">Installtion</a><a href="">Colors</a><a href="">Typography</a><a href="">Customize</a><a href="">Contribute</a><hr /><p class="sidebar-title">Components</p><a href="">Buttons</a><a href="">Forms</a><a href="">Inputs</a><a href="">Lists</a><a href="">Modals</a><a href="">Navigation</a><a href="">Tables</a><a href="">Tabs</a><a href="">Tooltips</a><a href="">Typography</a></div>';
