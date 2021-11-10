<template>
  <div id="a">
    <div class="b">
      <form @submit.prevent="add" action="login.php" method="POST">
        <div class="d">
          <h4>
            Simulasi Kredit
            <hr size="2px" color="black" />
          </h4>
          <p>
            <label><b>Nama Motor:</b></label
            ><br />
            <select
              style="width: 300px"
              type="select"
              v-model="nama"
              required
            >
              <option value="" disabled>Pilih Motor</option>
              <option
                v-bind:value="user.harga"
                v-for="user in Project6"
                :key="user.id"
              >
                {{ user.nama }}
              </option>
            </select>
          </p>
          <p>
            <label><b>Harga:</b></label
            ><br />
            <input
              style="width: 300px"
              placeholder="0"
              type="text"
              v-model="nama"
              required
              disabled
            />
          </p>
          <!-- <p>
            <label><b>DP:</b> </label><br />
            <input
              style="width: 100px"
              placeholder="Tahun Produksi..."
              type="radio"
              value="30"
              v-model="depe"
              required
            />
            <label style="width: 100px"><b>30%</b></label>
          </p> -->
          <p>
            <label><b>Jangka Waktu:</b></label
            ><br />
            <input
              style="width: 100px"
              placeholder="Masukkan Harga..."
              type="radio"
              v-model="bulan"
              value="12"
              required
            />
            <label style="width: 100px"><b>12 bulan</b></label
            ><br />
            <input
              style="width: 100px"
              placeholder="Masukkan Harga..."
              type="radio"
              v-model="bulan"
              value="24"
            />
            <label style="width: 100px"><b>24 bulan</b></label>
          </p>
          <p>
            <label><b>Angsuran:</b></label
            ><br />
            <input
              style="width: 300px"
              placeholder="Angsuran..."
              type="text"
              v-model="harga"
              disabled
            />
          </p>
          <button
            class="btn btn-info"
            type="submit"
            id="f"
            v-show="!updateSubmit"
            @click="fungsi"
          >
            Setuju
          </button>
          <button
            class="btn btn-info"
            type="submit"
            id="f"
            v-show="updateSubmit"
            @click="update(form)"
          >
            Update
          </button>
        </div>
        <p><i>*Syarat & Ketentuan Berlaku</i></p>
      </form>

      <div class="c">
        <h4 id="ab">Data Angsuran Motor</h4>
        <table border="1" width="200px">
          <thead>
            <tr>
              <th>Angsuran</th>
              <th>Nama Motor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in Project6" :key="user.id">
              <td>
                {{ user.harga }}
              </td>
              <td>
                {{ user.nama }}
              </td>
              <td>
                <b>
                  <u>
                    <button
                      style="
                        width: 115px;
                        text-align: center;
                        margin-bottom: 5px;
                      "
                      class="btn btn-success"
                      @click="edit(user)"
                    >
                      Perpanjang
                    </button>
                    <br />
                    <button
                      style="width: 115px; text-align: center"
                      class="btn btn-danger"
                      @click="del(user)"
                    >
                      Sold Out
                    </button>
                  </u>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "Motorr",
  data() {
    return {
      harga: "",
      harga: null,
      bulan: "",
      nama: "",
      harga: null,
      form: {
        id: "",
        nama: "",
        cc: "",
        th: "",
        harga: "",
        gambar: "",
      },
      Project6: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  watch: {
    nama(v) {
      this.harga = this.nama;
      this.nama = v;
    },
    bulan(v) {
      let nilai = Math.floor(
        (parseInt(this.harga) * 30) / 100 / parseInt(v)
      );
      this.harga = nilai;
      this.form.harga = nilai;
    },
  },
  methods: {
    fungsi() {
      this.harga =
        (parseInt(this.nama) * 30) / 100 / this.bulan;
      this.harga = this.harga;
    },
    load() {
      axios
        .get("http://localhost:3000/Project6")
        .then((res) => {
          this.Project6 = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/Project6", this.form).then((res) => {
        this.load();
        this.form.nama = "";
        this.form.cc = "";
        this.form.th = "";
        this.form.harga = "";
        this.form.gambar = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.nama = user.nama;
      this.form.cc = user.cc;
      this.form.th = user.th;
      this.form.harga = user.harga;
      this.form.gambar = user.gambar;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/Project6/" + form.id, {
          nama: this.form.nama,
          cc: this.form.cc,
          th: this.form.th,
          harga: this.form.harga,
          gambar: this.form.gambar,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.nama = "";
          this.form.cc = "";
          this.form.th = "";
          this.form.harga = "";
          this.form.gambar = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/Project6/" + user.id).then((res) => {
        this.load();
        let index = this.Project6.indexOf(form.nama);
        this.Project6.splice(index, 1);
      });
    },
  },
};
</script>
<style>
#a {
  border-radius: 25px;
  background-color: rgb(180, 70, 70);
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: white;
}
.b {
  display: flex;
  text-align: left;
  padding-left: 30px;
}
.c {
  width: 900px;
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 20px;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
}
.d {
  padding: 20px;
  margin-top: 28px;
  border: 2px dotted black;
}
#f {
  width: 300px;
}
#ab {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
i {
  color: blue;
}
table {
  border: 1 solid white;
}
</style>