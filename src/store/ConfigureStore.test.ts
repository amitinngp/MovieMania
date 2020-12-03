import { MovieState } from './ConfigureStore';
import {movieTestStore} from './StoreTest';

describe('#Store Test', () => {
    it('Should have store initialized', () => {
        const defaultState: MovieState = {movies:[],isLoading:{loading:false}};
        const store = movieTestStore(defaultState);
        expect(store).not.toBe(null);
    });
    it('Store should have [dispatch]!!', () => {
        const defaultState: MovieState = {movies:[],isLoading:{loading:false}};
        const store = movieTestStore(defaultState);
        expect(store.dispatch).not.toBe(null);
    });
    it('Store should have [subscribe]!!', () => {
        const defaultState: MovieState = {movies:[],isLoading:{loading:false}};
        const store = movieTestStore(defaultState);
        expect(store.subscribe).not.toBe(null);
    });
    it('Store should have [getState]!!', () => {
        const defaultState: MovieState = {movies:[],isLoading:{loading:false}};
        const store = movieTestStore(defaultState);
        expect(store.getState).not.toBe(null);
    });
    it('Store should have [replaceReducer]!!', () => {
        const defaultState: MovieState = {movies:[],isLoading:{loading:false}};
        const store = movieTestStore(defaultState);
        expect(store.replaceReducer).not.toBe(null);
    });
})
