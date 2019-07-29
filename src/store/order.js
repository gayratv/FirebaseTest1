import {observable, computed, action} from 'mobx';

export default class{
    @observable formData = {
        name: {
            value: '',
            label: 'Name',
            validator: val => /^[aA-zZ ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null
        },
        phone: {
            value: '',
            label: 'Phone',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText: 'От 7 до 15 цифр',
            valid: null
        },
        email: {
            value: '',
            label: 'Email',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Собака',
            valid: null
        }
    }

    constructor(rootStore){
        this.rootStore = rootStore;
    }

    @computed get formValid(){
        return Object.values(this.formData).every(field => field.valid);
    }

    @computed get data(){
        let data = {};

        for(let name in this.formData){
            data[name] = this.formData[name].value;
        }

        return data;
    }

    @action change(key, value){
        let field = this.formData[key];
        field.value = value;
        field.valid = field.validator(field.value);
    }
}











// server api
function getProducts(){
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}