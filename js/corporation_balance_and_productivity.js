
  import { COMPANY_NAME } from './js/constants.js';
    // assume :
  // consumer have fixed budget 
  // const COMPANY_NAME = ["Amazon","Apple","Google","Microsoft","Samsung Group","AT&amp;T","Facebook","ICBC","Verizon","China Construction Bank","Walmart","Huawei","Mercedes-Benz","Ping An","China Mobile","Agricultural Bank Of China","Toyota","State Grid","Bank of China","WeChat","Tencent (QQ)","Home Depot","Taobao","T (Deutsche Telekom)","Walt Disney","Shell","Volkswagen","NTT Group","BMW","Wells Fargo","Starbucks","YouTube","PetroChina","Bank of America","Tmall","Citi","Chase","Coca-Cola","Marlboro","IBM","Nike","Boeing","McDonald's","UnitedHealthcare","Moutai","Deloitte","Porsche","UPS","Sinopec","Intel","General Electric","Visa","American Express","Xfinity","Mitsubishi Group","Accenture","Honda","CSCEC","Oracle","Total","PWC","FedEx","Lowe's","EY","Allianz","Bosch","Dell Technologies","BP","Uber","China Merchants Bank","China Life","Cisco","Siemens","IKEA","Vodafone","CVS Health","NETFLIX","Orange","Hyundai Group","China Telecom","Evergrande","HSBC","JP Morgan","Nestlé","Audi","Tata Group","Baidu","SoftBank","Ford","Nissan","Pepsi","LG Group","Zara","Mastercard","au","Santander","RBC","Costco","Chevron","Instagram","Adidas","Country Garden","Target","Wuliangye","Fox","Walgreens","H&amp;M","Universal","Axa","SAP","AIA","Spectrum","CRCC","Hitachi Group","BNP Paribas","Alibaba","Bank of Communications","Capital One","NBC","Johnson's","TD","Volvo","Cartier","Louis Vuitton","Anthem","KFC","Petronas","CHEVROLET","ExxonMobil","Shanghai Pudong Development Bank","Warner Bros.","Paypal","Airbus","KPMG","China CITIC Bank","Sumitomo Group","Optum","Midea","Sberbank","Sony","NetEase","EDF","Panasonic","booking.com","Uniqlo","Industrial Bank","CRECG","Barclays","Chanel","JR","JD.com","ING","MUFG","Tesco","Scotiabank","Renault","DHL","SK Group","CBS","Postal Savings Bank","Lockheed Martin","Vanke","Hermès","Aetna","Greenland","L'Oréal","BBVA","CPIC","Eni","Movistar","Canon","UBS","Telstra","Goldman Sachs","Aldi","Sky","Engie","Enel","Humana","China Unicom","Gucci","Sam's Club","BMO","Delta","7-Eleven","HP","Nokia","U.S. Bank","Lexus","Medtronic","American Airlines","Carrefour","China Minsheng Bank","Union Pacific","Equinor","PICC","Mitsui Group","TSMC","Yanghe","Land Rover","Morgan Stanley","DBS","Pemex","eBay","Lidl","ADNOC","GEICO","SMBC","3M","Valero","TIM","Cognizant","Red Bull","Adobe","SK Hynix","Hikvision","PNC","United Airlines","Johnson &amp; Johnson","ABB","ESPN","Ferrari","Yahoo! Group","Broadcom","BT","Etisalat","Rabobank","BASF","Honeywell","Airbnb","Zurich","Poly  Development","Philips","Longfor Properties","Purina","Cigna","General Dynamics","3","Danone","Gillette","Salesforce","Gazprom","Youku","Woolworths","Rolex","Allstate","CRRC","CIBC","Coles","Bell","Metlife","Gree Electric Appliances","Subway","Vinci","Subaru","NatWest","HPE","Yili","China Everbright Bank","Northrop Grumman","Commonwealth Bank","Caterpillar","Coach","Progressive","Marubeni","Tesla","Budweiser","Credit Suisse","Qualcomm","Publix","Prudential (US)","Nintendo","Hilton","O2","Activision Blizzard","Société Générale","LIC","Sprint","Michelin","T.J. Maxx","Schlumberger","Poste Italiane","Generali Group","STC","MCC","Sunac","Fresenius","Neutrogena","Bud Light","Bridgestone","Victoria's Secret","Roche","Telus","NIVEA","Ross Dress For Less","Dow","Itaú","Brookfield","Enterprise","Lloyds Bank","Heineken","KEPCO","Lego","Nvidia","Kellogg's","Pampers","BNSF","Aviva","L&amp;M","Rogers","Southwest Airlines","ANZ","Dollar General","Haier","Infosys","Bouygues","China Resources Land","Tyson","Centurylink","Domino's Pizza","ADP","Playstation","Prudential (UK)","John Deere","Merrill Lynch","Dior","HCA","Safran","Emirates","nab","Bayer","Discover","ABC","20th Century Fox","LinkedIn","Mizuho Financial Group","Xiaomi","Bradesco","suning.com","Lenovo","Geely Auto","McKinsey","Swisscom","State Bank of India","BHP","Nescafé","Claro","Chubb","Capgemini","Crédit Agricole","Tiffany &amp; Co.","Circle K","Thermo Fisher Scientific","SFR","Sainsbury's","Lukoil","Daiwa House","Sysco","PTT","Telenor","El Corte Inglés","Pall Mall","UOB","OCBC Bank","Nordea","Chunghwa","Kroger","Asda","MS&amp;AD","Western Digital","Standard Chartered","DXC Technology","La Poste","Travelers","Tim Hortons","BUICK","McLane","Sprite","Nippon Life Insurance","Raytheon","Intesa Sanpaolo","Swiss Re","Carmax","Emerson Electric","Macy's","CLINIQUE","Luzhou Laojiao","Innogy","Pizza Hut","AutoZone","Micron Technology","E.Leclerc","SHISEIDO","Westpac","Texas Instruments","Mahindra Group","Deutsche Post","Kohl's","HBO","Dalian Wanda","Harbin","Phillips 66","BBC","Pantene","QNB","Marriot","Suzuki","ConocoPhillips","ctrip.com","Mengniu","Discovery","Estée Lauder","CNBM","Sherwin-Williams","AIG","HDFC Bank","Sodexo","Mobil","VMWARE","Airtel","Pfizer","CNOOC","Wrigley's","Applied Materials","Galaxy Macau","Telia","Lay's","Centene Corporation","Burberry","McCain","Huggies","BAE Systems","HCL","Johnnie Walker","Nordstrom","Petrobras","Cathay Life Insurance Co","CSX","Dunkin'","Esso","Crédit Mutuel","Telkom Indonesia","CN","CJ Group","ABN AMRO","CNRL","Kraft","Reliance","Saint-Gobain","Aflac","Prada","Dove","CFLD","China Southern","Maersk","Abbott","Schneider Electric","KBC","SSE","The North Face","CCCC","Fubon Life","Garnier","United Technologies","Doosan Group","Omega","Polo Ralph Lauren","Repsol","Cummins","Ferguson","Thales","CaixaBank","Jack Daniel's","Shinhan Financial Group","ArcelorMittal","BB&amp;T","Banco do Brasil","Viettel Telecom","Lotte Group","Randstad","Deutsche Bank","Carrier","iQiyi","Clarins","CNP Assurances","Tide/Ariel","Iberdrola","Bloomberg","Safeway","Caixa","China Eastern","Halliburton","Adecco","Maybank","Gatorade","KB Financial Group","Daikin","Marshalls","Bank of Beijing","British Airways"];
  console.log('COMPANY_NAME', COMPANY_NAME)
  const COMPANY_NAME_USED = []

  class Company {
    constructor(assets, debt) {
      const choose_company_name = () => {
        let company_name = COMPANY_NAME[Math.floor(COMPANY_NAME.length * Math.random())]
        if (COMPANY_NAME_USED.includes(company_name)) {
          return choose_company_name()
        } else {
          COMPANY_NAME_USED.push(company_name)
          return company_name
        }
      }
      this.company_name = choose_company_name()
      console.log('this.company_name', this.company_name)
    }

    produce() {

    }

    update_company = (year_now) => {
      for (let member_index = 0; member_index < this.family_members.length; member_index++) {
        let member = this.family_members[member_index]
        member.update_people(year_now)
        if (member.is_living) {
          this.assets += member.salary
          this.assets -= member.consumption
        } else {
          this.family_members.splice(member_index, 1)
          console.warn('Sorry ~~~~ member ', member ,' dead at year', year_now)
          member_index = member_index - 1
        }
      }
      // console.log('year_now', year_now)
      // console.log('salary', son.salary)
      // console.log('consumption', son.consumption)
      // console.log('------------------------')
      // console.log('at year', year_now, 'their assets become ', this.assets)
      // this.delivery_child(year_now)
    }

    delivery_child(year_now) {
      console.log('--------------------', year_now, '--------------------')
      // family will raise him for many years until he can stand alone
      // let raise_cost = CONSUMPTION_WITH_AGE.map((cost, year) => year < 20 ? cost : 0).reduce((prev, next, index, array) => prev + next)
      let raise_cost_of_year = CONSUMPTION_WITH_AGE.slice(0, STAND_ALONE_AGE)
      let raise_cost = raise_cost_of_year.reduce((prev, next, index, array) => prev + next)
      // the child's income will be ignored
      // console.log('next 20 years raise cost will be', CONSUMPTION_WITH_AGE.slice(0, STAND_ALONE_AGE))
      // console.log('raise child will cost ', raise_cost)
      console.log('family_members', deep_copy(this.family_members))
      console.log('this.assets ', this.assets )
      let family_balance = this.family_members.map((member, index) => {
        let age = year_now - member.birthday
        // console.log('next 20 years consumption will be', CONSUMPTION_WITH_AGE.slice(age + 1, age + 21))
        let consumption_arr = CONSUMPTION_WITH_AGE.slice(age + 1, age + STAND_ALONE_AGE + 1)
        let cost_next_20_year = consumption_arr.length ? consumption_arr.reduce((prev, next, index, array) => prev + next) : 0
        // console.log('family_member ', member.name, ' at age ', age, 'will cost ', cost_next_20_year)
        // console.log('next 20 years salary will be', SALARY_WITH_AGE.slice(age + 1, age + 21))
        let income_arr = SALARY_WITH_AGE.slice(age + 1, age + STAND_ALONE_AGE + 1)
        let income_next_20_year = income_arr.length ? income_arr.reduce((prev, next, index, array) => prev + next) : 0
        // console.log('family_member ', member.name, ' at age ', age, 'will earn ', income_next_20_year)
        // return {
        //   income: income_next_20_year,
        //   cost: cost_next_20_year
        // }
        return {
          income: income_arr,
          cost: consumption_arr,
        }
      })
      console.log('family_balance', family_balance)
      if (family_balance.length) {
        // let total_balance = family_balance.reduce((prev, next, index, array) => ({income: prev.income + next.income, cost: prev.cost + next.cost}))
        // console.log('total_balance', total_balance)
        // let decide_to_have_child = Math.floor((this.assets + total_balance.income - total_balance.cost) / raise_cost)
        // console.log('this.assets + total_balance.income - total_balance.cost', this.assets + total_balance.income - total_balance.cost)
        // console.log('decide_to_have_child', decide_to_have_child)
        // if (decide_to_have_child > 0) {
        //   let new_baby = Array.from(new Array(decide_to_have_child), (e, i) => {
        //     let new_born_child = new People(this.family_name, year_now + 1)
        //     console.warn('congrats ! ', this.family_name ,'has a new member ', new_born_child.name, ' at year ', year_now)
        //     this.family_members.push(new_born_child)
        //   })
        // }
        // if use total balance to calculate , the birth rate will be one child every 6 year
        // if add assets larger than 0, birth rate will be one child every 20 year
        // if every year assets larger than 0, birth rate will be one child every ** year
        // let decide_to_have_child = this.assets + total_balance.income - total_balance.cost - raise_cost > 0 && this.assets > 0
        let temp_deposit = this.assets
        let decide_to_have_child = Array.from(new Array(STAND_ALONE_AGE), (e, i) => {
          let balance_of_year = family_balance.reduce((pre, post, index, arr) => {
            // console.table({pre, post, index, arr})
            // return {
            //   income: pre.income + post.income[i],
            //   cost: pre.cost + post.cost[i]
            // }
            // console.log('year', i)
            // calculate every member's balance
            temp_deposit = temp_deposit + (post.income[i] ? post.income[i] : 0) - (post.cost[i] ? post.cost[i] : 0) - raise_cost_of_year[i]
            return temp_deposit
          }, temp_deposit)
          return balance_of_year
        }).every(balance_of_year => balance_of_year > 0)
        // .every(deposit_of_year => deposit_of_year > 0)
        console.log('decide_to_have_child', decide_to_have_child)
        // this.assets + total_balance.income - total_balance.cost - raise_cost > 0 && this.assets > 0
        if (decide_to_have_child) {
          let new_born_child = new People(this.family_name, year_now + 1)
          console.warn('congrats ! ', this.family_name ,'will have a new member ', new_born_child.name, ' at year ', year_now + 1)
          this.family_members.push(new_born_child)
        }
      } else {
        console.warn('family ', this.family_name, ' all die at year ', year_now)
      }
      
      //CONSUMPTION_WITH_AGE.map((cost, year) => year < 20 ? cost : 0).reduce((prev, next, index, array) => prev + next)
      console.log('--------------------  *  --------------------')
    }

  }
  
  function random_str() {
    return Math.random().toString(36).slice(-8)
  }

  function deep_copy(obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  function plot(plot_arr, gutter = 20, color = 'red') {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext("2d")
    const canvas_width = 10000
    const canvs_height = 1000

    // x-oxis
    context.beginPath();       // Start a new path
    context.moveTo(0, canvs_height/2);    // Move the pen to (30, 50)
    context.lineTo(canvas_width, canvs_height/2);  // Draw a line to (150, 100)
    context.stroke();   

    // y-oxis
    context.beginPath();       // Start a new path
    context.moveTo(0, 0);    // Move the pen to (30, 50)
    context.lineTo(0, canvs_height);  // Draw a line to (150, 100)
    context.stroke();   

    let max = Math.max(...plot_arr)
    let min = Math.min(...plot_arr)
    let max_abs = Math.ceil(Math.max(Math.abs(max), Math.abs(min)))

    // console.log('plot_arr', plot_arr)
    let unify_arr = plot_arr.map(y => y / max_abs * canvs_height/2)
    unify_arr.forEach((y, x) => {
      // plot(year * 10, doposit/5, 'red', year)
      context.fillStyle = color
      if (y > 0) {
        context.fillRect(x * gutter, canvs_height/2 - y, 0.8 * gutter, y)
      } else {
        context.fillRect(x * gutter, canvs_height/2 , 0.8 * gutter, 0 - y)
      }

      context.textAlign = "start";
      context.textBaseline = "bottom";
      context.font = '14px serif';
      context.fillStyle = 'blue';
      context.fillText('' + x, x * gutter, canvs_height/2 + 10)
    })


    context.textAlign = "start";
    context.textBaseline = "bottom";
    context.font = '14px serif';
    context.fillStyle = 'blue';
    context.fillText('+' + max_abs, 0 ,20)
    context.fillText('-' + max_abs, 0 ,990)
  }

  function main() {
    let deposit_arr = []
    const company_example = new Company()
    for (let year_now = 1900; year_now < 1901; year_now++) {
      // company_example.update_company(year_now)
      deposit_arr.push(company_example)
      // family_example.delivery_child(year_now)
    }



    // plot(deposit_arr, 20)
  }


  main()
