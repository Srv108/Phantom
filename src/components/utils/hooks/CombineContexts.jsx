export function CombineContext(...providers){
    return ({children}) => {
        // eslint-disable-next-line no-unused-vars
        return providers.reduceRight((accumulator, CurrentProvider) => {
            return <CurrentProvider> {accumulator} </CurrentProvider>
        }, children );
    }
}