<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXerJmz5fI9uFJQMDCpU48R96NANn51Z5OCw&usqp=CAU"
            alt=""
            width="30"
            height="24"
          />
          HONDA
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#product"
                >Product</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                <router-link to="/beli">Beli</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#peduli"
                >Peduli</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#profile"
                >Profile</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#kontak"
                >Kontak</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>