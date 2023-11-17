class UtilityHelper {

    async randomEmailGenerator() {
        return 'test'+ Math.random().toString().substring(3)+'@gmail.com'
    }
}export default UtilityHelper