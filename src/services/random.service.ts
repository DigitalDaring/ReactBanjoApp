
class RandomService {
    // just copied from MSDN, because seriously...Math.random is the worst
    getRandomInteger = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
};

const randomService = new RandomService();

export default randomService;