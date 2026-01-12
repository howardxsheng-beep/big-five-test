import api from "./axios";

const BIG_FIVE_URL = 'https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json'

export async function fetchBigFiveData(){
    const res = await api.get(BIG_FIVE_URL)
    return res.data
}