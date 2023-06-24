import { defineStore } from "pinia";
import { $ypis, type itemAttribute } from "@/services/ypis";

type Item = {
    created_at: string,
    item_guid: string,
    item_name: string,
    stock_quantity: number,
    unit_price: number,
    updated_at: string,
}
export const useItemStore = defineStore('item', {
    state: () => ({
        item: null,
        newItem: null,
    }),

    actions: {
        async createItem(item: itemAttribute) {
            try {
                this.newItem = await $ypis.items.create(item);
            } catch (err) {
                return err;
            }
        }
    },
    getters: {
        lastCreatedItem: (state) => state.newItem,
    }
});