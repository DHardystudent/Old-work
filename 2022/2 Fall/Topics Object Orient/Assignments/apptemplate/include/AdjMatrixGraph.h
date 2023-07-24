// AdjMatrixGraph.h
// 
// 

#include <vector>

using namespace std;

//Adjacency matrix
template <typename ValueType> class graphMatrix {
private:
    vector<ValueType> nodes;
    int matrix[20][20];
public:
    graphMatrix()
    {
        for (int i = 0; i < 20; i++)
        {
            for (int j = 0; j < 20; j++)
            {
                matrix[i][j] = 0;
            }
        }
    };

    bool adjacent(ValueType x, ValueType y)
    {
        bool isHere = false;
        if (matrix[x][y] == 1)
            isHere = true;
        return isHere;
    };

    vector<ValueType> neighbors(ValueType x)
    {
        vector<ValueType> nghbr;
        for (int y = 0; y < nodes.size(); y++)
        {
            if (matrix[x][y] == 1)
            {
                nghbr.push_back(y);
            }
        }
        return nghbr;
    };

    void addEdge(ValueType source, ValueType dest)
    {
        matrix[source][dest] = 1;
        matrix[dest][source] = 1;
    };

    void addNode(ValueType x)
    {
        nodes.push_back(x);
    };

    void deleteEdge(ValueType source, ValueType dest)
    {
        matrix[source][dest] = 0;
        matrix[dest][source] = 0;
    };

    void deleteNode(ValueType node)
    {
        for (int x = 0; x < nodes.size(); x++)
            matrix[x][node] = 0;
        for (int y = 0; y < nodes.size(); y++)
            matrix[node][y] = 0;

        nodes.erase(node);
    };
};
//https://www.softwaretestinghelp.com/graph-implementation-cpp/
// Used as refresher