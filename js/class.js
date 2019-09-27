import { COMPANY_NAME } from './constants.js';

const COMPANY_NAME_USED = []

export class Company {
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
  

