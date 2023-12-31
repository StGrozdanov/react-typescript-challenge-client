import axios from "axios";
import { Rental } from "../types/interfaces";

interface RentalResponse {
    id: number,
    attributes: {
        name: string,
        primary_image_url: string
    },
}

const outdoorsyApiInstance = axios.create({
    baseURL: 'https://search.outdoorsy.com',
    timeout: 3000,
});

const toRental = (response: RentalResponse[]): Rental[] => {
    return response.map((data: RentalResponse) => {
        return {
            id: data.id,
            name: data.attributes.name,
            imgURL: data.attributes.primary_image_url,
        }
    });
}

export const outdoorsyAPI = {
    searchByKeyword: async (keyword: string, limit: number = 0, offset: number = 0): Promise<Rental[]> => {
        const response = await outdoorsyApiInstance.request({
          method: "GET",
          url: `rentals?filter[keywords]=${keyword}&page[limit]=${limit}&page[offset]=${offset}`,
        });
        
        const result = response.data;
        return result.data.length > 0 ? toRental(result.data) : [];
    },

    searchByKeywordFromLA: async (keyword: string): Promise<Rental[]> => {
        const response = await outdoorsyApiInstance.request({
          method: "GET",
          url: `rentals?filter[keywords]=${keyword}`,
          headers: {
            'X-Forwarded-For': '161.123.5.123',
          },
        });
        
        const result = response.data;
        return result.data.length > 0 ? toRental(result.data) : [];
    },
}