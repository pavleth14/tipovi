import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeight, setWidth, calculateValue } from '../../features/doorSlice';
import './sliders.css';

const Sliders = () => {   

    const dispatch = useDispatch();
    const height = useSelector((state) => state.doorSlice.height);
    const width = useSelector((state) => state.doorSlice.width);
    const minHeight = useSelector((state) => state.doorSlice.minHeight);
    const maxHeight = useSelector((state) => state.doorSlice.maxHeight);
    const minWidth = useSelector((state) => state.doorSlice.minWidth);
    const maxWidth = useSelector((state) => state.doorSlice.maxWidth);

    useEffect(() => {
        dispatch(calculateValue()); // Calculate initial value on mount
    }, [dispatch]);

    const handleHeightChange = (e) => {
        dispatch(setHeight(Number(e.target.value)));
        dispatch(calculateValue());
    };

    const handleWidthChange = (e) => {
        dispatch(setWidth(Number(e.target.value)));
        dispatch(calculateValue());
    };

    return (
        <div>
            <div className="slider-container">
                <div className="slider">
                    <label htmlFor="heightRange">Visina (cm)</label>
                    <input
                        type="range"
                        min={minHeight}
                        max={maxHeight}
                        value={height}
                        id="heightRange"
                        className="height-slider"
                        onChange={handleHeightChange}
                    />
                    <p>Visina: {height} cm</p>
                </div>
                <div className="slider">
                    <label htmlFor="widthRange">Sirina (cm)</label>
                    <input
                        type="range"
                        min={minWidth}
                        max={maxWidth}
                        value={width}
                        id="widthRange"
                        className="width-slider"
                        onChange={handleWidthChange}
                    />
                    <p>Sirina: {width} cm</p>
                </div>
            </div>
        </div>
    );
}

export default Sliders;
