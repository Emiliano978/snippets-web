// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START order_and_end_modular]
import { query, orderBy, endAt } from "firebase/firestore";  

const q = query(citiesRef, orderBy("population"), endAt(1000000));
// [END order_and_end_modular]