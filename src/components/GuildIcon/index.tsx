import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
    const uri = 'https://img.ibxk.com.br/2020/10/30/30110741964176.jpg?w=704&h=264&mode=crop&scale=both';
    return (
            <Image 
                source={{ uri }}
                style={styles.image} 
                resizeMode="cover"
            />
    );
}