# Tanstack Query

- Eski adıyla react-query kütüphanesi, react uygulamalarında api'dan alınan verileri verimli ve kolay bir şekilde yönetmek için kullanılan yaygın bir kütüphanedir. Veri alımı, veri yönetimi , önbellekleme(caching) işlemlerini yapar.

# Temel Kavramlar

1. Query (Sorgu): Sayfa yüklendiği anda verileri almak için kullandığımız yöntem. (get)

2. Mutation: Sayfa yüklendiği anda değil istediğimiz zaman (butona tıklama) api isteği atmak için kullanılır. (get,post,delete,put)

3. Cache (Önbellek): React Query ,alınan verileri otomatik olarak önbelleğe alır ve gerektiğinde önbellekteki verileri kullanarak performansı arttırır.

4. Devtools (Geliştirici Araçları): React query kullandığımız uygulamalardaki sorguları mutation'ları izleme ve yönetmemizi sağlayan eklenti.

5. Invalidate: Mevcut sorgunun tekrar çağrılması olayı.

# Kurulum

- npm i @tanstack/react-query
- main.jsx'de provider'ı tanıt

# Kütüphaneler

- @tanstack/react-query
- @tanstack/react-query-devtools
- axios
- react-toastify
- react-router-dom
- react-icons
- tailwind

# Özellikler

- Filtreleme ve sıralama seçeneklerine göre konaklama yerlerini listeler.
- Kullanıcı bir konaklama yerinin üzerine tıkladığında, Detail bileşeni ile o konaklama yerinin ayrıntılarını görür.
- Yöneticiler  yeni bir konaklama yeri ekleyebilirler.
- Konaklama yerinin müsaitlik durumunu gösterir.

# GIF

![](/download.gif)
