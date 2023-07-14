/* eslint-disable prettier/prettier */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductRelatedService } from '../services/ProductRelatedService';
import { WebsiteService } from '../services/WebsiteService';

export const fetchProducts = createAsyncThunk('', async (req) => {
    // let response = await ProductRelatedService.allCategory()
    let response = await WebsiteService.contactUs(req)
        .then(res => { return JSON.stringify(res); });
    return response;
});
