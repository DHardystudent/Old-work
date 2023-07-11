// AdjListGraph.h
// 
// 

#include <vector>

using namespace std;

// Adjacency list 
template <typename ValueType> class graphList {
private:
    struct Node {
        ValueType val;
        Node* next;
    };
    vector< Node* > list;
    Node* newNode(ValueType x)
    {
        Node* nwNode = new Node;
        nwNode->val = x;
        nwNode->next = NULL;
    };

public:

    bool adjacent(ValueType x, ValueType y)
    {
        Node* temp = list[x];
        if (temp->next == NULL)
            return false;
        else
        {
            while (temp->next != NULL)
            {
                temp = temp->next;
                if (temp->val == y)
                    return true;
            }
        }
        return false;
    };

    vector<ValueType> neighbors(ValueType x)
    {
        vector<ValueType> nghbr;
        Node* temp = list[x];
        nghbr.push_back(x);
        if (temp->next == NULL)
        {
            return nghbr;
        }
        else
        {
            while (temp->next != NULL)
            {
                nghbr.push_back(temp->val);
                temp = temp->next;
            }
        }
        return nghbr;
    };

    void addEdge(ValueType source, ValueType dest)
    {
        Node* temp = list[source];
        while (temp->next != NULL) {
            temp = temp->next;
        }

        list[source].next = newNode(dest);
        return;
    };

    void addNode(ValueType x)
    {
        list.push_back(newNode(x));
        return;
    };

    void deleteEdge(ValueType source, ValueType dest)
    {
        Node* temp = list[source];
        Node* p = NULL;
        if (temp->next == NULL)
            return;
        else
        {
            while (temp->next != NULL && temp->val != dest)
            {
                p = temp;
                temp = temp->next;
            }
            if (temp->val == dest)
            {
                p->next = NULL;
                delete temp;
            }
        }
        return;
    };

    void deleteNode(ValueType node)
    {
        list.erase(node);
    };
};
//https://www.softwaretestinghelp.com/graph-implementation-cpp/
// Used as refresher