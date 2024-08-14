public class Main {
    
    public static void main(String[] args) {
        // Chama a função para imprimir números de 1 a 100
        printNumbers1To100();
        
        // Chama a função para imprimir o somatório dos números ímpares entre 10 e 1000
        printSumOfOddNumbers();
        
        // Chama a função para imprimir números múltiplos de 3 que não terminam em 3
        printMultiplesOfThree();
    }
    
    // Função para imprimir números de 1 a 100 separados por vírgula
    public static void printNumbers1To100() {
        StringBuilder result = new StringBuilder();
        for (int i = 1; i <= 100; i++) {
            result.append(i);
            if (i < 100) {
                result.append(", ");
            }
        }
        System.out.println(result.toString());
    }
    
    // Função para imprimir o somatório dos números ímpares entre 10 e 1000
    public static void printSumOfOddNumbers() {
        int sum = 0;
        for (int i = 11; i <= 1000; i += 2) {
            sum += i;
        }
        System.out.println(sum);
    }
    
    // Função para imprimir números múltiplos de 3 que não terminam em 3 separados por vírgula
    public static void printMultiplesOfThree() {
        StringBuilder result = new StringBuilder();
        for (int i = 3; i <= 1000; i += 3) {
            if (i % 10 != 3) {
                result.append(i);
                if (i < 1000 - 3) {
                    result.append(", ");
                }
            }
        }
        System.out.println(result.toString());
    }
}
