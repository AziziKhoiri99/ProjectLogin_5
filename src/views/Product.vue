<template>
  <div class="container marketing mt-5" id="product">
    <h2>Product</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card border-0">
          <img
            src="https://assetcdnendpoint.azureedge.net/uploads/product/thumbnail/scoopy-2023-27052021-093501.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Scoopy</h5>
            <ul class="card-text list-unstyled">
              <li>
                <small class="text-muted">Harga mulai</small>
                <p class="h5">Rp. 16,665,000</p>
              </li>
              <li>
                <small class="text-muted">Mesin</small>
                <p class="h5">100 cc</p>
              </li>
              <li>
                <small class="text-muted">Tahun</small>
                <p class="h5">2023</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col" v-for="(user, index) in Project6" :key="index">
        <div class="card border-0">
          <img :src="user.gambar" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ user.nama }}</h5>
            <ul class="card-text list-unstyled">
              <li>
                <small class="text-muted">Harga mulai</small>
                <p class="h5">{{ user.harga }}</p>
              </li>
              <li>
                <small class="text-muted">Mesin</small>
                <p class="h5">{{ user.cc }}</p>
              </li>
              <li>
                <small class="text-muted">Tahun</small>
                <p class="h5">{{ user.th }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      Project6: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/Project6")
        .then((res) => {
          this.Project6 = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>