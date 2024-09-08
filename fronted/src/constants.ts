export const cityOpt = [
  {
    label: "İstanbul",
    value: "İstanbul",
  },
  {
    label: "İzmir",
    value: "İzmir",
  },
  {
    label: "Ankara",
    value: "Ankara",
  },
  {
    label: "Rize",
    value: "Rize",
  },
];

export const sortOpt = [
  {
    label: "Fiyat : düşükten yükseğe",
    value: "price-asc",
  },
  {
    label: "Fiyat : yüksekten düşüğe",
    value: "price-desc",
  },
  {
    label: "Yıldız : düşükten yükseğe",
    value: "rating-asc",
  },
  {
    label: "Yıldız : yüksekten düşüğe",
    value: "rating-desc",
  },
];

export const initial = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
};

export const inputs=[
    {
        label:"Başlık",
        name:"name",
        placeholder:"Başlık giriniz"
    },
    {
        label:"Lokasyon",
        name:"location",
        placeholder:"Lokasyon giriniz"
    },
    {
        label:"Adres",
        name:"address",
        placeholder:"Adres giriniz"
    },
    {
        label:"Açıklama",
        name:"description",
        placeholder:"Açıklama giriniz"
    },
    {
        label:"Özellikler (, ile ayırınız)",
        name:"amenities",
        placeholder:"Özellikleri giriniz"
    },
    {
        label:"Rating",
        name:"rating",
        placeholder:"Rating giriniz",
        type:"number",
    },
    {
        label:"Gecelik Fiyat",
        name:"price_per_night",
        placeholder:"Ücreti giriniz",
        type:"number",
    },
    {
        label:"Müsait mi ?",
        name:"availability",
        type:"checkbox",
        
    },
]
