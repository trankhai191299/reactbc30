const stateDefault = {
    arrSinhVien:[{id:1,name:'AAA'},{id:2,name:"BBB"}],
    sinhVien:{
        id:'',
        name:''
    }
}


export const qlsvReducer = (state = stateDefault, action) => {
    switch (action.type){
        case 'HANDLE_CHANGE_INPUT':{
            let {id,value} = action
            state.sinhVien[id] = value
            state.sinhVien = {...state.sinhVien}
            return {...state};
        }
        case 'HANDLE_SUBMIT':{
            // lay du lieu tu action
            let {sinhVien} = action
            // clone state (object,array)
            let arrSinVienUpdate = [...state.arrSinhVien]
            arrSinVienUpdate.push(sinhVien)
            // cap nhat state
            state.arrSinhVien = arrSinVienUpdate
            return {...state}
        }
        default : return state
    }
}