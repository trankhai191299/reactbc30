



const stateDefault ={

    burger : [{name:'salad',quantity:1,price:5000},{name:'cheese',quantity:2,price:7500},{name:'beef',quantity:2,price:10000}]
}

export const baitapBurgerReducer = (state = stateDefault,action) =>{
    switch(action.type){
        case'TANG_GIAM_SO_LUONG':{
            let {name,quantity} = action.payload
            let burgerUpdate = [...state.burger]
            let sp = burgerUpdate.find(item => item.name === name)
            if(sp){
                sp.quantity += quantity
                if(sp.quantity === -1){
                    sp.quantity -= quantity
                }
            }
            state.burger = burgerUpdate
            return {...state}
        }
        default : return state
    }
}