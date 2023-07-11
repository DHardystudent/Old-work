//
// File:   assignment1.cpp
// Author: Devin Hardy
// Purpose:
// Graphs
//
#include <iostream>
#include <vector>
#include <fstream>
#include "../include/AdjListGraph.h"
#include "../include/AdjMatrixGraph.h"
using namespace std;

//Function for cycle checking
bool isCycle(vector<int> path, graphMatrix<int> matrix)
{
    int pntX = 0; int pntY = 88;
    for (auto it = path.begin(); it != path.end(); it++)
    {
        pntX = *it;
        if (pntY != 88)
        {
            if (!(matrix.adjacent(pntX, pntY)))
                return false;
        }
        pntY = pntX;
    }
    return true;
}
//https://www.geeksforgeeks.org/vector-in-cpp-stl/


// Print Vector Overloading
ostream& operator<<(std::ostream& os, const std::vector<int>& input)
{
    for (auto const& i : input) {
        os << i << " ";
    }
    return os;
}
//https://www.techiedelight.com/print-vector-cpp/


int main() {
    graphMatrix<int> adjMatrix;

    ifstream inFile;
    char read[25];
    int converted = 0; int i = 0;
    int node = 0; int edge = 0;

    vector<int> path;
    int pointX = 0; int pointY = 0;

    //Read from file and fill graph
    inFile.open("NodesFile.txt");
    while (inFile.getline(read, 25))
    {
        converted = read[i] - '0';
        node = converted;
        adjMatrix.addNode(node);
        i = i + 2;

        while (read[i] != '\0')
        {
            if (isdigit(read[i]))
            {
                converted = read[i] - '0';
                edge = converted;
                adjMatrix.addEdge(node, edge);
            }
            i++;
        }
        i = 0;
    }
    inFile.close();

    converted = 0;
    //Prompt for path
    cout << "Enter a path to check for cycle" << endl;
    cin.getline(read, 25);
    i = 0;
    while (read[i] != '\0')
    {
        if (isdigit(read[i]))
        {
            converted = read[i] - '0';
            path.push_back(converted);
        }
        i++;
    }
    i = 0;

    //Function to check for cycle

    if (isCycle(path, adjMatrix))
        cout << path << " is a cycle in the graph." << endl;
    else
        cout << path << " is not a cycle in the graph." << endl;

    return 0;
}