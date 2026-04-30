import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import styles from "./css/style";
import { Link } from "expo-router";
import FormField from "./components/FormField";

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require("../assets/sesisenai.png")}
        ></Image>
      </View>
      <View style={styles.form}>
        <FormField
          placeholder="Insira o E-mail"
          label="Login"
          secure={false}
        />
        <FormField
          placeholder="Insira a Senha"
          label="Senha"
          secure={true}
        />
        <View style={styles.contBaixo}>
          <View style={styles.baixo}>
            <Link href={"/cadastro"} style={styles.direita}>
              Cadastrar
            </Link>
            <Link href={"/esqueciSenha"} style={styles.direita}>
              Esqueci a senha
            </Link>
          </View>
        </View>
      </View>
      <View>
        <Link href={""} style={styles.botao}>
          <View style={styles.btn}>
            <Text style={styles.entrar}>ENTRAR</Text>
          </View>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
