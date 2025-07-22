import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';

// Async Thunks
export const fetchSkills = createAsyncThunk("skills/fetchSkills", async() => {

    const res = await axios.get("/skills");

    return res.data;

})

export const addSkill = createAsyncThunk("skills/addSkill", async(data) => {

    const res = await axios.post("/skills", data);

    return res.data;

})


// Slice
const skillsSlice = createSlice({
    name:"skills",
    initialState:{
        skills:[],
        status:"idle"
    },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSkills.fulfilled, (state, action) => {
            state.skills = action.payload;
            state.status = "success"
        })
        builder.addCase(addSkill.fulfilled, (state, action) => {
            state.skills.unshift(action.payload);
        })
    }
});



export default skillsSlice.reducer;
