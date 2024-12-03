package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func part2() {
	fmt.Println("Hello, World!")
	// Open File
	//file, err := os.Open("../sample.txt")
	file, err := os.Open("../input.txt")
	if err != nil {
		log.Fatal("Skill Issue: ", err)
	}

	var left []int
	var right []int

	// Scan thorugh each line and split data
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		fmt.Println(line)

		split := strings.Split(line, "   ")

		lInt, err := strconv.Atoi(split[0])
		if err != nil {
			log.Fatal(err)
		}
		rInt, err := strconv.Atoi(split[1])
		if err != nil {
			log.Fatal(err)
		}

		left = append(left, lInt)
		right = append(right, rInt)
	}

	fmt.Println(left)
	fmt.Println(right)

}
