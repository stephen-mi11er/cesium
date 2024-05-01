export default class ObjectUtils{
    static InitEnv<TR>(env: TR, envName: string): TR {
        return (
            env ??
            (() => {
                const error = new Error('There was an fatal issue at initialization!');
                console.error(`FATAL: ${envName} is null or empty!`)
                throw error;
            })()
        );
    }
}
