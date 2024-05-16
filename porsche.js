var turboo = [
  {
    id:1,
    image: "https://i.imgur.com/5AmTPlu.png",
    title: "911 Turbo",
    price: "£ 159,100.00",
    emissions: "Fuel consumption combined* (model range): 23.0 – 23.5 mpg, CCO2 emissions combined* (model range): 279 – 271 g/km",
    acceleration: "2.8",
    kw: "0",
    ps: "580",
    speed: "199",
    link:"/custom/p911/turbo911"
  },
  {
    id:2,
    image: "https://i.imgur.com/KHeEEO8.png",
    title: "911 Turbo Cabriolet",
    price: "£ 169,100.00",
    emissions: "Fuel consumption combined* (model range): 22.6 – 23.3 mpg, CCO2 emissions combined* (model range): 284 – 275 g/km",
    acceleration: "2.9",
    kw: "0",
    ps: "580",
    speed: "199",
    link:"/custom/p911/turbo911Cabriolet"
  },
  {
    id:3,
    image: "https://i.imgur.com/DbGQ6rL.png",
    title: "911 Turbo S",
    price: "£ 180,600.00",
    emissions: "Fuel consumption combined* (model range): 23.0 – 23.5 mpg, CCO2 emissions combined* (model range): 278 – 271 g/km",
    acceleration: "2.7",
    kw: "0",
    ps: "650",
    speed: "205",
    link:"/custom/p911/turbo911S"
  },
  {
    id:4,
    image: "https://i.imgur.com/49446mx.png",
    title: "911 Turbo S Cabriolet",
    price: "£ 190,600.00",
    emissions: "Fuel consumption combined* (model range): 22.6 – 23.3 mpg, CCO2 emissions combined* (model range): 284 – 275 g/km",
    acceleration: "2.8",
    kw: "0",
    ps: "650",
    speed: "205",
    link:"/custom/p911/tubro911SCabriolet"
  }
]
var links911 = [{
  name: "Carerra Models",
  link:"/model/911-carrera"
},
{
 name: "Targa Models",
 link:"/model/911-targa"
},{
 name: "Turbo Models",
 link:"/model/911-turbo"
},{
 name: "Turbo S Models",
 link:"/model/911-turbo-s"
},
{
 name: "Dakar",
 link:"/model/911-dakar"
},{
 name: "GT3 Models",
 link:"/model/911-gt3"
},{
 name: "GT3 RS",
 link:"/model/911-gt3-rs"
},{
 name: "S/T",
 link:"/model/911-st"
},
]
var linksTaycan=[
  {
    name: "Taycan Models",
    link:"/model/taycan"
  },{
    name: "Cross Turismo",
    link:"/model/cross-turismo"
  },{
    name: "Sport Turismo",
    link:"/model/sport-turismo"
  }
]
var links718=[
  {
    name: "Cayman Models",
    link:"/model/cayman"
  }, {
    name: "Cayman GT4 RS",
    link:"/model/cayman-gt4-rs"
  },{
    name: "Cayman Spyder RS",
    link:"/model/718-spyder-rs"
  }
]

let porsche={
    taycan:{
       title: "Taycan",
       price: "£ 86,500.00",
       image: "https://images-porsche.imgix.net/-/media/A476D89B333349D39A089152383C7E85_22CDF95F742F459BBA7DA94B27AD66BC_TA24Q3BIX0010-taycan-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format",
       logo:"https://cdn.ui.porsche.com/porsche-design-system/model-signatures/taycan.min.ba4e7c3cb86a78d626d4463b81be0f23.svg",
       acceleration: "4.8",
       kw: "300",
       ps: "408",
       speed: "143",
       links:linksTaycan,
       imageFront:"https://images-porsche.imgix.net/-/media/8BEAA9C5AB93489C8F2415AE4C9329F1_F42969469C494D9181B3E8BE548B8FA2_TA24Q3BIX0011-taycan-front?w=750&q=85&auto=format",
       imageFirst: "https://images-porsche.imgix.net/-/media/B5EE8921E27E4796A4970472BD26D260_055186BBAF4441B39A545330CD91EAAE_TA24Q3EOX0002-taycan-turbo-s-driving?w=652&ar=3%3A4&q=45&dpr=2&auto=format",
       imageSecond: "https://images-porsche.imgix.net/-/media/6AF5BE9FDA3C45EE9C55B01EEC780D9C_CA51670E2BD042FBAFAFD13CF41CA7B1_TA24Q3EOX0005-taycan-turbo-s-charging?w=652&ar=3%3A4&q=45&dpr=2&auto=format",
       imageCard:"https://images-porsche.imgix.net/-/media/9F31ED1468C24CBBBC0F9DDC75D21E47_87040B7CE0E846DDB8EB89BEDF685EFC_TA24Q3BOX0001-01-taycan-front-and-side-desktop?w=865&q=85&auto=format",
       emissions: "Electrical consumption combined (model range): 20.0 - 16.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
       models: [
        {
            id: 1,
            image: "https://images-porsche.imgix.net/-/media/261EF9F86B2B4F45AC57EA8D26C3B081_A4BAE2D2A1C74C5E87E3AB8A5B8F5124_TA24Q3BIX0010-taycan-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
            title: "Taycan",
            price: "£ 86,500.00",
            emissions: "Electrical consumption combined (model range): 20.0 - 16.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
            acceleration: "4.8",
            kw: "300",
            ps: "408",
            speed: "143",
            link:"/custom/taycan/taycan"
        },
        {
          id: 2,
          image:"https://images-porsche.imgix.net/-/media/5F3468201ACF4D2CA8B3012BC9FB9774_1605711B6C234CDFB427AECC09D32468_TA24Q3CIX0010-taycan-4s-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan 4S",
          price: "£ 95,900.00",
          emissions:"Electrical consumption combined (model range): 20.9 - 17.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration:"3.7",
          kw:"400",
          ps: "544",
          speed:"155",
          link:"/custom/taycan/taycan4s"
        },
        {
          id:3,
          image:"https://images-porsche.imgix.net/-/media/118CC27923D348479FFFA724C52F05F8_DDC0C8C251894632B424B4D2D985AB7E_TA24Q3DIX0010-taycan-turbo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan Turbo",
          price: "£ 134,100.00",
          emissions:"Electrical consumption combined (model range): 20.5 - 18.0 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration:"2.7",
          kw:"650",
          ps: "884",
          speed:"162",
          link:"/custom/taycan/taycanTurbo"
        },
        {
          id:4,
          image:"https://images-porsche.imgix.net/-/media/329E707A3234485BBE98485116865780_E8DD4C47C7F14D41B61C1AE76B59FC1A_TA24Q3EIX0010-taycan-turbo-s-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan Turbo S",
          price: "£ 161,400.00",
          emissions:"Electrical consumption combined (model range): 20.5 - 17.9 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration:"2.4",
          kw:"700",
          ps: "952",
          speed:"162",
          link:"/custom/taycan/taycanTurboS"  
        },
        {
            id:5,
            image:"https://images-porsche.imgix.net/-/media/22CBB6863E0E4A3983C808641FEF53FD_B88D400D9505407AA65017CB0AC3C92E_TA24Q3GIX0010-taycan-turbo-gt-with-weissach-package-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
            title: "Taycan Turbo GT with Weissach Package",
            price: "£ 186,300.00",
            emissions:"Electrical consumption combined (model range): 21.3 - 20.6 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
            acceleration:"2.2",
            kw:"760",
            ps: "1034",
            speed:"190",
            link:"/custom/taycan/taycanTurboGTP"  
          },
          {
              id: 6,
              image: "https://images-porsche.imgix.net/-/media/6F3316F7836148FFB74DE919E90D988D_F019553CB68B41239BD422BEA58FA59A_TA24Q3FIX0010-taycan-turbo-gt-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
              title: "Taycan Turbo GT",
              price: "£ 186,300.00",
              emissions:"Electrical consumption combined (model range): 21.6 - 20.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
              acceleration:"2.3",
              kw:"760",
              ps: "1034",
              speed:"180",
              link:"/custom/taycan/taycanTurboGT"  
          }
    ]
  },
    crossturismo:{
       title: "Taycan 4 Cross Turismo",
       price: "£ 96,800.00",
       image: "https://images-porsche.imgix.net/-/media/CCA1BC9089DF4731A6C6C538491D4C1B_48CC4B78FA804C029C0872D8292445FD_TA24Q3LIX0010-taycan-4-cross-turismo-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format",
       logo:"https://cdn.ui.porsche.com/porsche-design-system/model-signatures/taycan.min.ba4e7c3cb86a78d626d4463b81be0f23.svg",
       acceleration: "4.7",
       kw: "320",
       ps: "435",
       speed: "137",
       links:linksTaycan,
       imageFront:"https://images-porsche.imgix.net/-/media/D18B71A935904C1BB192005CBCADF458_A3BF8B2F668A4C56836C983765B075C8_TA24Q3LIX0011-taycan-4-cross-turismo-front?w=750&q=85&auto=format",
       imageFirst: "https://images-porsche.imgix.net/-/media/2EC6ED65300540FEBA1FFDB82DCEB95D_CB887680458B4555B2AB815F0985FDBC_TA24Q3NOX0004-01-taycan-turbo-cross-turismo-side?w=652&ar=3%3A4&q=45&dpr=2&auto=format",
       imageSecond: "https://images-porsche.imgix.net/-/media/CCDEB9255677497A9DA449F42002D676_51231F0C0E3845A19C75401B3E74BDA1_TA24Q3EOX0006-taycan-turbo-s-charging?w=652&ar=3%3A4&q=45&dpr=2&auto=format",
       imageCard:"https://images-porsche.imgix.net/-/media/9F05E03CC2C04A8CB0F670762B457831_D05700CCD2504BD3883073794830DA90_TA24Q3NOX0001_-01-taycan-turbo-cross-turismo-front-and-side-desktop?w=865&q=85&auto=format",
       emissions: "Electrical consumption combined (model range): 22.0 - 18.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
       models:[
        {
          id:1,
          image:"https://images-porsche.imgix.net/-/media/9FA5DBD0CC344634A2EADE9F3A7E5706_CEF28B984E4F499E9DB39C5F7E34D312_TA24Q3LIX0010-taycan-4-cross-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan 4 Cross Turismo",
          price: "£ 96,800.00",
          emissions:"Electrical consumption combined (model range): 22.0 - 18.7 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration:"4.7",
          kw:"320",
          ps: "435",
          speed:"137",
          link:"/custom/taycan/taycan4CrossTurismo"
        },
        {
          id:2,
          image:"https://images-porsche.imgix.net/-/media/C9D9D66CFC8A4AA58E802A42AC97CE6B_341415E48FF94F279B4218B1B527F25F_TA24Q3MIX0010-taycan-4s-cross-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan 4S Cross Turismo",
          price: "£ 100,400.00",
          emissions:"Electrical consumption combined (model range): 22.0 - 18.8 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration:"3.8",
          kw:"440",
          ps: "598",
          speed:"149",
          link:"/custom/taycan/taycan4sCrossTurismo"
        },
        {
          id:3,
          image:"https://images-porsche.imgix.net/-/media/8712BA7A6DA34147976BB552A8D62F11_204445A831004729A6C3F2BCDB51A5C1_TA24Q3NIX0010-taycan-turbo-cross-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan Turbo Cross Turismo",
          price: "£ 135,200.00",
          emissions:"Electrical consumption combined (model range): 22.0 - 19.1 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration:"2.8",
          kw:"650",
          ps: "884",
          speed:"155",
          link:"/custom/taycan/taycanTurboCrossTurismo" 
        },
        {
          id:4,
          image:"https://images-porsche.imgix.net/-/media/BC19E4E2931B43E4BE3B8973B7E79B83_8D3AD7CE10F243D0913CBB2F48681876_TA24Q3OIX0010-taycan-turbo-s-cross-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan Turbo Cross Turismo",
          price: "£ 162,500.00",
          emissions:"Electrical consumption combined (model range): 22.0 - 19.1 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration:"2.5",
          kw:"700",
          ps: "952",
          speed:"155",
          link:"/custom/taycan/taycanTurboSCrossTurismo"  
        },
       ]
    },
    sportturismo:{
      title: "Taycan Sport Turismo",
       price: "£ 87,300.00",
       logo:"https://cdn.ui.porsche.com/porsche-design-system/model-signatures/taycan.min.ba4e7c3cb86a78d626d4463b81be0f23.svg",
       image: "https://images-porsche.imgix.net/-/media/7F5E13B73B6B43558D5B2B3ABD077EE0_51361D01EC334AE68A92886FCF30E04F_TA24Q3HIX0010-taycan-sport-turismo-side?w=900&q=85&crop=faces%2Centropy%2Cedges&auto=format",
       acceleration: "4.8",
       kw: "300",
       ps: "408",
       speed: "143",
       links:linksTaycan,
       imageFront:"https://images-porsche.imgix.net/-/media/AF9094CA76D24AC58A7B0E5060C9D928_285F6A25ECC34D4F8F63B0B179D6F697_TA24Q3HIX0011-taycan-sport-turismo-front?w=598&q=85&auto=format",
       imageFirst: "https://images-porsche.imgix.net/-/media/4467B5821DF2432FA498E1689BBC7D16_87E484E998C846D68F40C6AB369BE57F_TA24Q3IOX0002-taycan-4s-sport-turismo-driving?w=640&ar=3%3A4&q=85&auto=format%201x,https://images-porsche.imgix.net/-/media/4467B5821DF2432FA498E1689BBC7D16_87E484E998C846D68F40C6AB369BE57F_TA24Q3IOX0002-taycan-4s-sport-turismo-driving?w=640&ar=3%3A4&q=45&dpr=2&auto=format%202x",
       imageSecond: "https://images-porsche.imgix.net/-/media/9B2A7C5E7DAF464FA57C32702F120F99_7B581FE6324949788C98B345B7645806_TA24Q3EOD0001-taycan-turbo-s-charging?w=640&ar=3%3A4&q=85&auto=format%201x,https://images-porsche.imgix.net/-/media/9B2A7C5E7DAF464FA57C32702F120F99_7B581FE6324949788C98B345B7645806_TA24Q3EOD0001-taycan-turbo-s-charging?w=640&ar=3%3A4&q=45&dpr=2&auto=format%202x",
       imageCard:"https://images-porsche.imgix.net/-/media/929758834EA54E19B71BF17C96B9B0D7_64E63C9B9CAB4FE88CE057EF5797868B_TA24Q3IOX0002-taycan-4s-sport-turismo-driving-desktop?w=865&q=85&auto=format",
       emissions: "Electrical consumption combined (model range): 20.9 - 17.6 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
       models:[
        {
          id:1,
          image:"https://images-porsche.imgix.net/-/media/039CB34F21FD4257B6BBA36127D183E5_426DE359871546938E91B1A0A4FF9E37_TA24Q3HIX0010-taycan-sport-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan Sport Turismo",
          price: "£ 87,300.00",
          emissions:"Electrical consumption combined (model range): 20.9 - 17.6 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration: "4.8",
          kw: "300",
          ps: "408",
          speed: "143",
          link:"/custom/taycan/taycanSportTurismo"  
        },
        {
          id:2,
          image:"https://images-porsche.imgix.net/-/media/56311104243942A1BC29AC1F3BDF5900_41E66CBA5D75401EA1D937260E6B4ABB_TA24Q3IIX0010-taycan-4s-sport-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan 4S Sport Turismo",
          price: "£ 96,700.00",
          emissions:"Electrical consumption combined (model range): 21.8 - 18.5 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration: "3.7",
          kw: "544",
          ps: "400",
          speed: "155",
          link:"/custom/taycan/taycan4SSportTurismo"  
        },
        {
          id:3,
          image:"https://images-porsche.imgix.net/-/media/0035B8E0361A4495AA373215E4B84A99_92945DC32B114BC8A6D68717F879815F_TA24Q3JIX0010-taycan-turbo-sport-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan Turbo Sport Turismo",
          price: "£ 134,800.00",
          emissions:"Electrical consumption combined (model range): 21.6 - 18.8 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration: "2.7",
          kw: "650",
          ps: "884",
          speed: "162",
          link:"/custom/taycan/taycanTurboSportTurismo"
        },
        {
          id:4,
          image:"https://images-porsche.imgix.net/-/media/DACF11A76A2E4AAE8455E375BC8F0BA3_244DEFDF97D641A99564598F92CFD247_TA24Q3KIX0010-taycan-turbo-s-sport-turismo-side?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format",
          title: "Taycan Turbo S Sport Turismo",
          price: "£ 162,100.00",
          emissions:"Electrical consumption combined (model range): 21.5 - 18.9 kWh/100 km, CO2 emissions combined* (model range): 0 g/km",
          acceleration: "2.4",
          kw: "700",
          ps: "952",
          speed: "162",
          link:"/custom/taycan/taycanTurboSSportTurismo"
        },
       ]
       },
    cayman:{
        title: "718 Cayman",
        price: "£ 51,800.00",
        image: "https://i.imgur.com/yTpWOkA.png",
        logo:"https://pmepress.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=773676&show=1",
        acceleration: "5.1",
        kw: "220",
        ps: "300",
        speed: "170",
        links:links718,
        imageFront:"https://di-uploads-pod15.dealerinspire.com/porscheatlantaperimeter/uploads/2021/12/Porsche718Cayman-jelly.png",
        imageFirst: "https://i.imgur.com/daBNia4.jpeg",
        imageSecond: "https://i.imgur.com/XjILsmw.jpeg",
        imageCard:"https://www.thecarexpert.co.uk/wp-content/uploads/2021/07/PCGB19_0656_fine-1920x960.jpeg.webp",
        emissions: "Fuel consumption combined* (model range): 29.1 – 31.7 mpg, CO2 emissions combined* (model range): 220 – 201 g/km",
        models:[
          {
            id:1,
            image:"https://i.imgur.com/yTpWOkA.png",
            title: "718 Cayman",
            price: "£ 51,800.00",
            emissions: "Fuel consumption combined* (model range): 29.1 - 31.7 mpg, CO2 emissions combined* (model range): 220 - 201 g/km",
            acceleration: "5.1",
            kw: "220",
            ps: "300",
            speed: "170",
            link:"/custom/p718/cayman718"
          },
          {
            id:2,
            image:"https://i.imgur.com/UdaHmfF.png",
            title: "718 Boxster",
            price: "£ 53,800.00",
            emissions: "Fuel consumption combined* (model range): 29.1 – 31.7 mpg, CO2 emissions combined* (model range): 220 – 201 g/km",
            acceleration: "5.1",
            kw: "220",
            ps: "300",
            speed: "170",
            link:"/custom/p718/boxster"
          },
          {
            id:3,
            image:"https://i.imgur.com/DWsCdKa.png",
            title: "718 Cayman Style Edition",
            price: "£ 56,000.00",
            emissions: "Fuel consumption combined* (model range): 29.1 – 31.7 mpg, CO2 emissions combined* (model range): 220 – 201 g/km",
            acceleration: "5.1",
            kw: "220",
            ps: "300",
            speed: "170",
            link:"/custom/p718/cayman718Edition"
          },
          {
            id:4,
            image:"https://i.imgur.com/kDcJDwm.png",
            title: "718 Boxster Style Edition",
            price: "£ 58,000.00",
            emissions: "Fuel consumption combined* (model range): 29.1 – 31.7 mpg, CO2 emissions combined* (model range): 220 – 203 g/km",
            acceleration: "5.1",
            kw: "220",
            ps: "300",
            speed: "171",
            link:"/custom/p718/boxsterEdition"
          },
          {
            id:5,
            image:"https://i.imgur.com/AuWTALh.png",
            title: "718 Cayman S",
            price: "£ 58,000.00",
            emissions: "Fuel consumption combined* (model range): 27.4 – 29.4 mpg, CO2 emissions combined* (model range): 235 – 217 g/km",
            acceleration: "4.6",
            kw: "257",
            ps: "350",
            speed: "177",
            link:"/custom/p718/caymanS"
          },
          {
            id:6,
            image:"https://i.imgur.com/LVP70Vz.png",
            title: "718 Cayman GTS 4.0",
            price: "£ 73,300.00",
            emissions: "Fuel consumption combined* (model range): 25.9 – 28.0 mpg, CO2 emissions combined* (model range): 247 – 230 g/km",
            acceleration: "4.5",
            kw: "294",
            ps: "400",
            speed: "182",
            link:"/custom/p718/caymanGTS"
          },
          {
            id:7,
            image:"https://i.imgur.com/lZbiaSN.png",
            title: "718 Boxster GTS 4.0",
            price: "£ 75,300.00",
            emissions: "Fuel consumption combined* (model range): 25.9 – 28.0 mpg, CO2 emissions combined* (model range): 247 – 230 g/km",
            acceleration: "4.5",
            kw: "294",
            ps: "400",
            speed: "182",
            link:"/custom/p718/boxsterGTS"
          },
      ]
  },
  caymangt4rs:{
    title: "718 Cayman GT4 RS",
    price: "£ 123,000.00",
    image: "https://i.imgur.com/7WcxJIR.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "3.4",
    kw: "368",
    ps: "500",
    speed: "196",
    links:links718,
    imageFront:"https://i.imgur.com/j93S17l.png",
    imageFirst: "https://www.wsupercars.com/wallpapers-phone/Porsche/2022-Porsche-718-Cayman-GT4-RS-001-2400p.jpg",
    imageSecond: "https://collectorscarworld.com/wp-content/uploads/2022/05/DSC04431_2048px.jpg",
    imageCard:"https://i0.wp.com/www.twinsparkracing.com/wp-content/uploads/2022/08/Verkoopfotos-29-juli.jpg?fit=2048%2C1365&ssl=1",
    emissions: "Fuel consumption combined* (model range): 21.4 mpg, CO2 emissions combined* (model range): 299 g/km",
    models:[
      {
        id:1,
        image: "https://i.imgur.com/7WcxJIR.png",
        title: "718 Cayman GT4 RS",
        price: "£ 123,000.00",
        emissions: "Fuel consumption combined* (model range): 21.4 mpg, CO2 emissions combined* (model range): 299 g/km",
        acceleration: "3.4",
        kw: "368",
        ps: "500",
        speed: "196",
        link:"/custom/p718/caymanGT4RS"
              }
    ]
  },
  spyderRS:{
    title: "718 Spyder RS",
    price: "£ 123,000.00",
    image: "https://i.imgur.com/KuPN2WH.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "3.4",
    kw: "368",
    ps: "500",
    speed: "191",
    links:links718,
    imageFront:"https://i.imgur.com/dyCZC4E.png",
    imageFirst: "https://i.imgur.com/XD9wtEF.jpeg",
    imageSecond: "https://i.imgur.com/fSr8Dsq.jpeg",
    imageCard:"https://www.wardsauto.com/sites/wardsauto.com/files/Porsche%20718%20Boxster%20Spyder%20RS%20rear%203.4_0.jpg",
    emissions: "Fuel consumption combined* (model range): 21.7 mpg, CO2 emissions combined* (model range): 294 g/km",
    models:[
      {
        id:1,
        image: "https://i.imgur.com/KuPN2WH.png",
        title: "718 Spyder RS",
        price: "£ 123,000.00",
        emissions: "Fuel consumption combined* (model range): 21.7 mpg, CO2 emissions combined* (model range): 294 g/km",
        acceleration: "3.4",
        kw: "368",
        ps: "500",
        speed: "191",
        link:"/custom/p718/spyderRS"
      }
    ]
  },
  carrera:{
    title: "911 Carrera",
    price: "£ 97,000.00",
    image: "https://i.imgur.com/pjcH4b7.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "4.2",
    kw: "0",
    ps: "385",
    speed: "182",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmI1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhHk7zhRc2gidqA7fQAeWOJUPYJinTBsN5NWg2dioCXQF%25vUqrIspAnPT05iZJyNzr7ctBvoqB4f8Il7%25oQ6lrQ98AS4dsMNXibELZdW%25tFlS",
    imageFirst: "https://i.imgur.com/MJtTJ0k.jpeg",
    imageSecond: "https://i.imgur.com/rsKBZ9r.jpeg",
    imageCard:"https://store-images.s-microsoft.com/image/apps.55618.14378100014308772.c7346da7-69ef-4223-a23c-56a611a9c08d.e4c5e780-c1ab-4bfd-b6bb-29f4e391cec4",
    emissions: "Fuel consumption combined* (model range): 26.2 – 27.4 mpg, CCO2 emissions combined* (model range): 245 – 233 g/km",
    models:[
      {
        id:1,
        image: "https://i.imgur.com/pjcH4b7.png",
        title: "911 Carrera",
        price: "£ 97,000.00",
        emissions: "Fuel consumption combined* (model range): 26.2 – 27.4 mpg, CCO2 emissions combined* (model range): 245 – 233 g/km",
        acceleration: "4.2",
        kw: "0",
        ps: "385",
        speed: "182",
        link:"/custom/p911/carrera911"
      },
      {
        id:2,
        image: "https://i.imgur.com/POeJoMZ.png",
        title: "911 Carrera T",
        price: "£ 105,700.00",
        emissions: "Fuel consumption combined* (model range): 25.9 – 27.4 mpg, CO2 emissions combined* (model range): 247 – 233 g/km",
        acceleration: "4.5",
        kw: "0",
        ps: "385",
        speed: "181",
        link:"/custom/p911/carrera911T"
      },
      {
        id:3,
        image: "https://i.imgur.com/Y5gPTPJ.png",
        title: "911 Carrera Cabriolet",
        price: "£ 107,000.00",
        emissions: "Fuel consumption combined* (model range): 26.2 – 27.2 mpg, CO2 emissions combined* (model range): 245 – 236 g/km",
        acceleration: "4.4",
        kw: "0",
        ps: "385",
        speed: "181",
        link:"/custom/p911/carrera911Cabriolet"
      },
      {
        id:4,
        image: "https://i.imgur.com/weBsKFv.png",
        title: "911 Carrera 4",
        price: "£ 103,000.00",
        emissions: "Fuel consumption combined* (model range): 25.9 – 27.4 mpg, CO2 emissions combined* (model range): 247 – 234 g/km",
        acceleration: "4.2",
        kw: "0",
        ps: "385",
        speed: "181",
        link:"/custom/p911/carrera9114"
      },
      {
        id:5,
        image: "https://i.imgur.com/7z2YZAW.png",
        title: "911 Carrera 4 Cabriolet",
        price: "£ 113,000.00",
        emissions: "Fuel consumption combined* (model range): 26.2 – 26.9 mpg, CO2 emissions combined* (model range): 246 – 238 g/km",
        acceleration: "4.4",
        kw: "0",
        ps: "385",
        speed: "180",
        link:"/custom/p911/carrera9114Cabriolet"
      },
      {
        id:6,
        image: "https://i.imgur.com/R1v9pQu.png",
        title: "911 Carrera S",
        price: "£ 110,000.00",
        emissions: "Fuel consumption combined* (model range): 25.4 – 28.0 mpg, CO2 emissions combined* (model range): 251 – 229 g/km",
        acceleration: "3.7",
        kw: "0",
        ps: "450",
        speed: "191",
        link:"/custom/p911/carrera911S"
      },
      {
        id:7,
        image: "https://i.imgur.com/KSFPD7B.png",
        title: "911 Carrera S Cabriolet",
        price: "£ 120,000.00",
        emissions: "Fuel consumption combined* (model range): 25.7 – 27.4 mpg, CO2 emissions combined* (model range): 250 – 233 g/km",
        acceleration: "3.9",
        kw: "0",
        ps: "450",
        speed: "190",
        link:"/custom/p911/carrera911SCabriolet"
      },
      {
        id:8,
        image: "https://i.imgur.com/LZHwx4P.png",
        title: "911 Carrera 4S",
        acceleration: "3.6",
        price: "£ 116,000.00",
        emissions: "Fuel consumption combined* (model range): 25.4 – 27.7 mpg, CO2 emissions combined* (model range): 253 – 231 g/km",
        acceleration: "3.6",
        kw: "0",
        ps: "450",
        speed: "190",
        link:"/custom/p911/carrera9114S"
      },
      {
        id:9,
        image: "https://i.imgur.com/czuE03M.png",
        title: "911 Carrera 4S Cabriolet",
        price: "£ 116,000.00",
        emissions: "Fuel consumption combined* (model range): 25.4 – 27.2 mpg, CO2 emissions combined* (model range): 252 – 235 g/km",
        acceleration: "3.8",
        kw: "0",
        ps: "450",
        speed: "189",
        link:"/custom/p911/carrera9114SCabriolet"
      },
      {
        id:10,
        image: "https://i.imgur.com/HnpLg8z.png",
        title: "911 Carrera GTS",
        price: "£ 122,000.00",
        emissions: "Fuel consumption combined* (model range): 24.8 – 27.2 mpg, CO2 emissions combined* (model range): 258 – 236 g/km",
        acceleration: "3.4",
        kw: "0",
        ps: "480",
        speed: "193",
        link:"/custom/p911/carrera911GTS"
      },
      {
        id:11,
        image: "https://i.imgur.com/oaGMiPr.png",
        title: "911 Carrera GTS Cabriolet",
        price: "£ 132,000.00",
        emissions: "Fuel consumption combined* (model range): 25.0 – 27.2 mpg, CO2 emissions combined* (model range): 256 – 239 g/km",
        acceleration: "3.6",
        kw: "0",
        ps: "480",
        speed: "192",
        link:"/custom/p911/carrera911GTSCabriolet"
      },
      {
        id:12,
        image: "https://i.imgur.com/Rx2SYWb.png",
        title: "911 Carrera 4 GTS",
        price: "£ 128,000.00",
        emissions: "Fuel consumption combined* (model range): 24.8 – 26.6 mpg, CO2 emissions combined* (model range): 259 – 240 g/km",
        acceleration: "3.3",
        kw: "0",
        ps: "480",
        speed: "192",
        link:"/custom/p911/carerra9114GTS"
      },
      {
        id:13,
        image: "https://i.imgur.com/7yfeqyB.png",
        title: "911 Carrera 4 GTS Cabriolet",
        price: "£ 138,000.00",
        emissions: "Fuel consumption combined* (model range): 25.0 – 26.2 mpg, CO2 emissions combined* (model range): 256 – 244 g/km",
        acceleration: "3.5",
        kw: "0",
        ps: "480",
        speed: "191",
        link:"/custom/p911/carerra9114GTSCabriolet"
      },
      {
        id:14,
        image: "https://i.imgur.com/L2GNrIt.png",
        title: "911 Edition 50 Years Posrche Design",
        price: "£ 159,600.00",
        emissions: "Fuel consumption combined* (model range): 25.0 – 26.2 mpg, CO2 emissions combined* (model range): 257 – 245 g/km",
        acceleration: "3.5",
        kw: "0",
        ps: "480",
        speed: "191",
        link:"/custom/p911/porsche911Edition"
      }
    ]
  },
  targa:{
    title: "911 Targa 4",
    price: "£ 113,000.00",
    image: "https://i.imgur.com/FlDbLeD.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "4.4",
    kw: "0",
    ps: "385",
    speed: "179",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmI1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhSyuzhRc2MEf8dXFxevPED6uwgMN9nRexOUo4y7z1yUlhDfFnHspAnPuo7iZJyNecgctBvozBvf8dXFkv%25PED6uLDgN9nRe9fWo4y7z4XhF%25vUqCaauWXsOsHteV6iT4ECzhRc2%25E%25qA7fQW7WOJUPYAq4TBsN5v%25t2dioCX4AQDcFG63NYnfurU9f5yPewk4RCvNzxYEzGXoq1Sf9r6FObMFswRuT022Dx7e2HyBQD9AzXCKuAIKyDUZJcOt5FTmnEBc6XdGAZ",
    imageFirst: "https://i.imgur.com/suWxzGA.jpeg",
    imageSecond: "https://i.imgur.com/oJ1Xsxb.jpeg",
    imageCard:"https://i2-prod.dailyrecord.co.uk/incoming/article5438971.ece/ALTERNATES/s1200c/P15_0006.jpg",
    emissions: "Fuel consumption combined* (model range): 25.4 – 27.2 mpg, CO2 emissions combined* (model range): 252 – 235 g/km",
    models:[
      {
        id:1,
        image: "https://i.imgur.com/FlDbLeD.png",
        title: "911 Targa 4",
        price: "£ 113,000.00",
        emissions: "Fuel consumption combined* (model range): 25.4 – 27.2 mpg, CO2 emissions combined* (model range): 252 – 235 g/km",
        acceleration: "4.4",
        kw: "0",
        ps: "385",
        speed: "179",
        link:"/custom/p911/targa4"
      },
      {
        id:2,
        image: "https://i.imgur.com/Kw31TrK.png",
        title: "911 Targa 4S",
        price: "£ 126,000.00",
        emissions: "Fuel consumption combined* (model range): 25.4 – 27.2 mpg, CO2 emissions combined* (model range): 252 – 235 g/km",
        acceleration: "3.8",
        kw: "0",
        ps: "450",
        speed: "189",
        link:"/custom/p911/targa4s"
      },
      {
        id:3,
        image: "https://i.imgur.com/gqq8tFt.png",
        title: "911 Targa 4 GTS",
        price: "£ 138,000.00",
        emissions: "Fuel consumption combined* (model range): 25.0 – 26.2 mpg, CO2 emissions combined* (model range): 257 – 245 g/km",
        acceleration: "3.5",
        kw: "0",
        ps: "480",
        speed: "191",
        link:"/custom/p911/targa4GTS"
      },
    ]
  },
  turbo:{
    title: "911 Turbo",
    price: "£ 159,100.00",
    image: "https://i.imgur.com/5AmTPlu.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "2.8",
    kw: "0",
    ps: "580",
    speed: "199",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmJ1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhHk7zhRc2C0f8dXFkv%25PED6uEcCN9nRe9vVo4y7z7ZkF%25vUqJuspAnPe07iZJyNzJ9ctLgR4N2XgG2EthKf%25USPvs18kpB%254ZogK",
    imageFirst: "https://i.imgur.com/WDtdCyj.jpeg",
    imageSecond: "https://i.imgur.com/6xwBKgB.jpeg",
    imageCard:"https://cdn.motor1.com/images/mgl/8wZJM/s3/porsche-911-turbo-s-650-ps.jpg",
    emissions: "Fuel consumption combined* (model range): 23.0 – 23.5 mpg, CCO2 emissions combined* (model range): 279 – 271 g/km",
    models:turboo
  },
  turboS:{
    title: "911 Turbo S",
    price: "£ 180,600.00",
    image: "https://i.imgur.com/DbGQ6rL.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "2.7",
    kw: "0",
    ps: "650",
    speed: "205",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmI1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhHk7zhRc2gidqA7fQAe0OJUPYJinTBsN5fOf2dioCoVlQDcFG6YuWXsO53oeV6iTC6BzhRc2fHf8Il7%25oQ6lrQ98ASPWsMNXibELZdW%25tFlS",
    imageFirst: "https://i.imgur.com/okZJFmI.jpeg",
    imageSecond: "https://i.imgur.com/70kTFBs.jpeg",
    imageCard:"https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/702000/900/702923.jpg",
    emissions: "Fuel consumption combined* (model range): 23.0 – 23.5 mpg, CCO2 emissions combined* (model range): 279 – 271 g/km",
    models:turboo
  },
  dakar:{
    title: "911 Dakar",
    price: "£ 173,300.00",
    image: "https://i.imgur.com/fWA8105.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "3.4",
    kw: "0",
    ps: "480",
    speed: "149",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrChhkAAsXbiqmKyIxFT3SvWptRv38CuLmuGdl76DrRFQ9rz8plxgI7mInQko5xj3BRLzueXRqhhZYoC75OtO4bctBvoqKpf8dXFYSIPED6uAfNN9nRebB8o4y7z1BUlhDfa%25nL8W6q7GyIEVRVEmv39h7AsgXj4AUVWx6a%25JsZ2%25RmHInZsedI2elm9x7rv1UBxzFfGbGV0DIJ5y%25jeNcRHBzgoWyJ7H",
    imageFirst: "https://i.imgur.com/gXaHuyr.jpeg",
    imageSecond: "https://i.imgur.com/JnkK8G8.jpeg",
    imageCard:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/porsche-911-dakar-green-side.jpg?itok=oXvW2Ay3",
    emissions: "Fuel consumption combined* (model range): 25.0 mpg, CO2 emissions combined* (model range): 256 g/km",
    models:[
      { id:1,
        title: "911 Dakar",
        price: "£ 173,300.00",
        image: "https://i.imgur.com/fWA8105.png",
        acceleration: "3.4",
        kw: "0",
        ps: "480",
        emissions: "Fuel consumption combined* (model range): 25.0 mpg, CO2 emissions combined* (model range): 256 g/km",
        speed: "149",
        link:"/custom/p911/dakar911"
      }
    ]
  },
  gt3:{
    title: "911 GT3",
    price: "£ 146,400.00",
    image: "https://i.imgur.com/N7Hbk34.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "3.4",
    kw: "0",
    ps: "510",
    speed: "198",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmJ1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhHk7zhRc2cHf8dXFXgKPED6uYrMN9nRedN7gVdcq1HUlhDfu%25bspAnPeAEiZkm69PTvmCT8ZVHUJ7KfyUxtMlJ49pNmH",
    imageFirst: "https://i.imgur.com/u7w4KET.jpeg",
    imageSecond: "https://i.imgur.com/xXxgrRG.jpeg",
    imageCard:"https://www.autocar.co.uk/sites/autocar.co.uk/files/1-porsche-911-gt3-2021-rt-hero-front.jpg",
    emissions: "Fuel consumption combined* (model range): 21.7 – 21.9 mpg, CO2 emissions combined* (model range): 294 – 293 g/km",
    models:[
      { 
        id:1,
        title: "911 GT3",
        price: "£ 146,400.00",
        image: "https://i.imgur.com/N7Hbk34.png",
        acceleration: "3.4",
        kw: "375",
        ps: "510",
        emissions: "Fuel consumption combined* (model range): 21.7 – 21.9 mpg, CO2 emissions combined* (model range): 294 – 293 g/km",
        speed: "198",
        link:"/custom/p911/GT3911"
      },
      { 
        id:2,
        title: "911 GT3 with Touring Package",
        price: "£ 146,400.00",
        image: "https://i.imgur.com/HosnBGn.png",
        acceleration: "3.9",
        kw: "375",
        ps: "510",
        emissions: "Fuel consumption combined* (model range): 21.9 mpg, CO2 emissions combined* (model range): 293 – 292 g/km",
        speed: "199",
        link:"/custom/p911/GT3911Package"
      }
    ]
  },
  gt3RS:{
    title: "911 GT3 RS",
    price: "£ 192,600.00",
    image: "https://i.imgur.com/Ae8boTt.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "3.2",
    kw: "386",
    ps: "525",
    speed: "184",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3U3rm1UzQKQpYnfuruAZ5yPewk84CvNzxKEnGXoq1SoUr6FObTmTB8VuyY0oVk0DBRlqvzpQNqjdtAsvyJ5Vw",
    imageFirst: "https://i.imgur.com/3nTRmFR.jpeg",
    imageSecond: "https://i.imgur.com/hRmPbTA.jpeg",
    imageCard:"https://www.autocar.co.uk/sites/autocar.co.uk/files/porsche-gt3-rs-review-2023-04-tracking-front-low.jpg",
    emissions: "Fuel consumption combined* (model range): 21.1 mpg, CO2 emissions combined* (model range): 305 g/km",
    models:[
      {
      id:1,
      title: "911 GT3 RS",
      price: "£ 192,600.00",
      image: "https://i.imgur.com/Ae8boTt.png",
      acceleration: "3.2",
      kw: "386",
      ps: "525",
      emissions: "Fuel consumption combined* (model range): 21.1 mpg, CO2 emissions combined* (model range): 305 g/km",
      speed: "184",
      link:"/custom/p911/GT3911RS"
        }
    ]
  },
  ST:{
    title: "911 S/T",
    price: "£ 231,600.00",
    image: "https://i.imgur.com/ByLwqO8.png",
    logo:"https://www.planet-9.com/cdn-cgi/image/format=auto,onerror=redirect,width=640,height=640,fit=scale-down/https://www.planet-9.com/attachments/sigpiccayman-png.265638/",
    acceleration: "3.7",
    kw: "386",
    ps: "525",
    speed: "186",
    links: links911,
    imageFront:"https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3Uto11UzQKZ9ObsqYSs45yPeweJtCvNzxDJDGXoq1sgbr6FObwnSwRuT0jVQx7e2HLW61UzQKIzfbsqYS%25p5y%25BORrMzBjMXyi8Q12EGeQlv4DP7RnwB0",
    imageFirst: "https://i.imgur.com/L9UTgSs.jpeg",
    imageSecond: "https://i.imgur.com/Jc9FXXM.jpeg",
    imageCard:"https://i.gaw.to/content/photos/59/08/590890-porsche-911-s-t-2023-au-volant-de-la-911-anniversaire-celle-des-puristes.jpeg",
    emissions: "Fuel consumption combined* (model range): 20.5 mpg, CO2 emissions combined* (model range): 313 g/km",
    models:[
      {
      id:1,
      title: "911 S/T",
      price: "£ 231,600.00",
      image: "https://i.imgur.com/ByLwqO8.png",
      acceleration: "3.7",
      kw: "386",
      ps: "525",
      emissions: "Fuel consumption combined* (model range): 20.5 mpg, CO2 emissions combined* (model range): 313 g/km",
      speed: "186",
      link:"/custom/p911/ST911"
        }
    ]
  }
}


  export default porsche;

 /*
 https://i.imgur.com/KuPN2WH.png
https://files.porsche.com/filestore/image/multimedia/none/992-carrera-t-modelimage-sideshot/model/13105757-4ed8-11ed-80f7-005056bbdc38;sR;twebp/porsche-model.webp
https://files.porsche.com/filestore/image/multimedia/none/992-c2cab-modelimage-sideshot/model/87563ffb-d97f-11eb-80d9-005056bbdc38;sR;twebp/porsche-model.webp


https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmJ1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhHk7zhRc2C0f8dXFkv%25PED6uEcCN9nRe9vVo4y7z7ZkF%25vUqJuspAnPe07iZJyNzJ9ctLgR4N2XgG2EthKf%25USPvs18kpB%254ZogK
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZSQtPmVMKMwSohZ8sYS1EffNI1mB_kSZjq_BP0uYCjvAaeuLdsZj3FNUQMpayMxA3g&usqp=CAU

https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmI1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhHk7zhRc2gidqA7fQAe0OJUPYJinTBsN5fOf2dioCoVlQDcFG6YuWXsO53oeV6iTC6BzhRc2fHf8Il7%25oQ6lrQ98ASPWsMNXibELZdW%25tFlS
https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711cYLvsi60rFkXqXUnBEgAHYByY9AJ%25OggSPvuB1pkbgI7DMJphteDkrNqLHn4gpXnLZYovIS0rhO3RMFYqwhXjbWBbaoD2OFmJ1BSCAW%25k4Zo9Zs1l20k8tRNpCY5fNGvvVb2Ho0rhHk7zhRc2C0f8dXFkv%25PED6uEcCN9nRe9vVo4y7z7ZkF%25vUqJuspAnPe07iZJyNzJ9ctLgR4N2XgG2EthKf%25USPvs18kpB%254ZogK
*/