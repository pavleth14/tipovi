import { createSlice } from '@reduxjs/toolkit';

const doorSlice = createSlice({
    name: 'door',
    initialState: {
        doorType: 'Type 1',
        value: 0,
        height: 200, 
        width: 120, 
        minHeight: 180,
        maxHeight: 400,
        minWidth: 100,
        maxWidth: 350
    },
    reducers: {
        setDoorType(state, action) {
            state.doorType = action.payload;
        },
        calculateValue(state) { 
            const heightInMeters = state.height / 100; 
            const widthInMeters = state.width / 100;    
            const areaInSquareMeters = heightInMeters * widthInMeters;

            switch (state.doorType) {
                case 'Type 1':
                    state.value = areaInSquareMeters * 2000; 
                    break;
                case 'Type 2':
                    state.value = areaInSquareMeters * 3500; 
                    break;
                case 'Type 3':
                    state.value = areaInSquareMeters * 6000; 
                    break;
                default:
                    state.value = 0;
            }
        },
        setHeight(state, action) {
            state.height = action.payload;
        },
        setWidth(state, action) {
            state.width = action.payload;
        },
    },
});

// Exporting the actions
export const { setDoorType, calculateValue, setHeight, setWidth } = doorSlice.actions;

// Exporting the reducer
export default doorSlice.reducer;
