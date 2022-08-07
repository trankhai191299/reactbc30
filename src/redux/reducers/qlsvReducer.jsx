const stateDefault = {
    arrSinhVien:[{id:1,name:'AAA'},{id:2,name:"BBB"}],
    sinhVien:{
        id:'',
        name:''
    }
}


export const qlsvReducer = (state = stateDefault, action) => {
    switch (action.type){
        default : return state
    }
}