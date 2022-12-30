export class MockUtils {
    static isMock(): boolean {
        const reactAppMock = process.env.REACT_APP_MOCK;
        return (
            !!reactAppMock &&
            (
                (typeof reactAppMock === 'string') &&
                (reactAppMock.toLowerCase() !== 'false')
            )
        );
    }
}
