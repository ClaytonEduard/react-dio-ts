import axios from "axios";
import { useEffect, useState } from "react";

const languagenDetactionApi = {
    getLangage: async () => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.gitsense.com/v1/language-detection');
                const data = await response.json();
                const linguagens = Object.keys(data.bio);
                return linguagens
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        fetchData();
    }
}
export default languagenDetactionApi
