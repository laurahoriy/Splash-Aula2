import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./css/style";
import { Link } from "expo-router";
import FormField from "./components/FormField";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require("../assets/sesisenai.png")}
        />
      </View>

      <View style={styles.form}>
        <FormField
          placeholder="Insira seu nome"
          label="Nome"
          secure={false}
        />
        <FormField
          placeholder="Insira seu email"
          label="Email"
          secure={false}
        />
        <FormField
          placeholder="Crie uma senha"
          label="Senha"
          secure={true}
        />

        <View style={styles.contBaixo}>
          <View style={styles.baixo}>
            <Link href={"/login"} style={styles.direita}>
              Voltar para login
            </Link>
          </View>
        </View>
      </View>

      <View>
        <Link href={""} style={styles.botao}>
          <View style={styles.btn}>
            <Text style={styles.entrar}>CADASTRAR</Text>
          </View>
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
