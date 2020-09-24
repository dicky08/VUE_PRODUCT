#APK_VUE JS
Ini merupakan aplikasi Point Of Sales dimana terdapat sebuah hak akses
Cashier dan Admin dimana didalamnya terdapat sebuah fitur CRUD pagination dan transaksi.
APK ini dilengkapi dengan sebuah library VueJs yaitu menggunakan Vuex dan juga menggunakan Mixins serta Custom Directives.
Apk ini juga dilengkapi dengan authentikasi yang dimana token tersebut disimpan didalam localStroge.
Vue.js adalah suatu librari Javascript yang digunakan untuk membangun antar muka sebuah website yang interaktif,
Vuex adalah library Vue.js yang dapat digunakan untuk meng-handle state (state manajemen), dimana data yang ada dapat didefinisikan dan dipusatkan pada sebuah file sehingga bisa digunakan oleh semua component yang ada.
Dengan menggunakan Vuex, komunikasi antar component menjadi lebih mudah. Sebagaimana yang kita ketahui bahwasanya dalam interaksi antar component agar dapat saling bertukar data adalah dengan menggunakan props, maka dengan Vuex kamu cukup mengakses state yang telah didefinisikan pada Vuex Store.
Vuex store bersifat reaktif. Setelah komponen mengambil status dari itu, mereka akan secara reaktif memperbarui pandangan mereka setiap kali keadaan berubah.
Ada beberapa konsep inti dari vuex, yaitu :
State => untuk menampung data murni.
Getters => untuk melakukan penyaringan/manipulasi/pengurutan data.
Mutation => untuk melakukan pengolahan data.
Actions => sama seperti mutations, akan tetapi actions dapat asynchronous.

untuk Local storage merupakan fungsi di javascript yang cara kerjanya sama seperti cookie ( data disimpan dalam browser )  tapi memiliki beberapa kelebihan kelebihan. Local storage dapat menyimpan data lebih aman dan lebih besar dibandingkan dengan cookie. Local storage juga dapat menyimpan data lebih dari 5 MB tanpa harus membebani performa browser

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
