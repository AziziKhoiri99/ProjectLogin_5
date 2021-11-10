<template>
  <div class="container" id="kontak">
    <footer class="py-5">
      <div class="row">
        <div class="col-2">
          <h5>Tentang Kami</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Home</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#product" class="nav-link p-0 text-muted">Product</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#peduli" class="nav-link p-0 text-muted">Peduli</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#kontak" class="nav-link p-0 text-muted">Kontak</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#profile" class="nav-link p-0 text-muted">About</a>
            </li>
          </ul>
        </div>

        <div class="col-4">
          <h5>Kontak Kami</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a class="nav-link p-0 text-muted">
                <small>Alamat</small>
              </a>
              Jl. KarangAwen Bondowoso Alas Roban Atlantic
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link p-0 text-muted">
                <small>Email</small>
              </a>
              alasroban666@gmail.co.id
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link p-0 text-muted">
                <small>Telpon</small>
              </a>
              Tel. 0811-9-500-989
            </li>
          </ul>
        </div>

        <div class="col-4 offset-1">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden"
                >Email address</label
              >
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex justify-content-between py-4 my-4 border-top">
        <p>&copy; 2021 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-dark" href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#">
              <i class="fab fa-tiktok"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>