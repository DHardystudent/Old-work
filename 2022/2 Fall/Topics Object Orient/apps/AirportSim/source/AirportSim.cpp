//
// File:   AirportSim.cpp
// Author: Devin Hardy
// Purpose:
// Airport Simulation 
// 3 queues for 3 lines and time ticks
#include <iostream>
#include <queue>
#include <utility>
#include <random>


class LineQueue {
public:
    int inLine() { 
        isMax();
        checkLine();
        return line.size(); };
    void addToQ(int cnt) { line.push(cnt); };
    bool waiting() { 
        if (line.empty()) return false;
        else return true; };
    void getService(int timeTick) {
        totalTime = timeTick - line.front();
        line.pop();
        totalCustomers++;
    };
    int getMax() {
        return max;
    };
    double calcAvgLine(int cnt) {
        avgLine = static_cast<double>(lineTotals) / cnt;
        return avgLine;
    };
    double calcAvgTime() {
        avgTime = static_cast<double>(totalTime) / totalCustomers;
        return avgTime;
    };
private: 
    std::queue<int> line;
    //piece one
    double avgLine;
    int lineTotals;
    int max;
    void isMax() {
        if (line.size() > max)
            max = line.size();
        return;
    };
    void checkLine() {
        lineTotals += lineTotals + line.size();
        return;
    };
    //piece two
    double avgTime;
    double totalTime;
    double totalCustomers;
};

class agent {
public:
    agent(int x, int y) { 
        speed = std::make_pair(x, y);
        cntTime = 0;
        customerRndm = 0;
        isBusy = false;
        avgService = 0;
        totalService = 0;
        cstmrsServed = 0;
    }
    bool notBusy() { return (!(isBusy)); }
    void getCustomer() {
        isBusy = true;
        cntTime = 0;
        RANDOM();
        return;
    };
    void service()
    {
        cntTime++;
        if (cntTime == customerRndm)
        {
            totalService += cntTime;
            cstmrsServed++; 
        }
        return;
    };
    double calcAvgService() {
        avgService = static_cast<double>(totalService) / cstmrsServed;
        return avgService;
    };
private:
    std::pair<int, int> speed;
    //
    int cntTime;
    int customerRndm; //Random number for customer
    void RANDOM() {
        static std::random_device dev;
        std::mt19937 eng{ dev() };
        std::uniform_int_distribution<int> dist{ speed.first, speed.second };
        customerRndm = dist(eng);
    };
    bool isBusy;
    //piece three
    double avgService;
    double totalService;
    double cstmrsServed;
};

int main() {

    int simLength = 720;// Sim will run for 12 hours (720 minutes / ticks)
    int timeTick = 0;
    double avgPlaceholder = 0;

    //Queues for the 3 lines
    LineQueue First;
    LineQueue Freq;
    LineQueue Eco;

    // counter for time spent on service
    agent fClass(5, 20);// First class service spd  5 - 20 ticks speed
    agent frqClass(6, 12);// Freq  class service spd  6 - 12 ticks speed
    agent ecoClass(5, 10);// Eco   class service spd  5 - 10 ticks speed
    
    //--- Work ---//

    while(timeTick < simLength){
        // Add customers
        if(timeTick%3 == 0) // every 3
        { 
            Eco.addToQ(timeTick);
            if (timeTick%15 == 0) // every 15
            {
                Freq.addToQ(timeTick);
            }
            if (timeTick%30 == 0) // every 30
            {
                First.addToQ(timeTick);
            }
        }

        // If agent is free get a customer from line
        // Is line empty? Serve customer from other line
        if (ecoClass.notBusy())
        {
            if (Eco.waiting())
            {
                Eco.getService(timeTick);
                ecoClass.getCustomer();
                // dequeue and move to agent
            }
            else // helps first unless empty then helps freq
            {
                if (First.waiting())
                {
                    First.getService(timeTick);
                    ecoClass.getCustomer();
                }
                else if (Freq.waiting())
                {
                    Freq.getService(timeTick);
                    ecoClass.getCustomer();
                }
            }   
        }
        if (frqClass.notBusy())
        {
            if (Freq.waiting())
            {
                Freq.getService(timeTick);
                frqClass.getCustomer();
                // dequeue and move to agent
            }
            else // helps in first but if empty helps eco
            {
                if (First.waiting())
                {
                    Freq.getService(timeTick);
                    frqClass.getCustomer();
                    // dequeue and move to agent
                }
                else if (Eco.waiting())
                {
                    Eco.getService(timeTick);
                    frqClass.getCustomer();
                }
            }
        }
        if (fClass.notBusy())
        {
            if (First.waiting())
            {
                First.getService(timeTick);
                fClass.notBusy();
                // dequeue and move to agent
            }
            else // helps in freq first if both empty helps eco
            {
                if (Freq.waiting())
                {
                    Freq.getService(timeTick);
                    fClass.getCustomer();
                }
                else if (Eco.waiting())
                {
                    Eco.getService(timeTick);
                     fClass.getCustomer();
                }
            }
        }

        // Agent provides service to costumer
        ecoClass.service();
        frqClass.service();
        fClass.service();


        // every 10 how many in line and if an agent is helping someone
        if (timeTick%10 == 0)
        {
            std::cout << "Economy Line has " << Eco.inLine() << std::endl;
            std::cout << "Frequent Fliers has " << Freq.inLine() << std::endl;
            std::cout << "First Class has " << First.inLine() << std::endl << std::endl;
        }
    }

    // Output
    std::cout << std::endl << std::endl;
    // AVG and Maximum of each line
    std::cout << "AVG for Economy Class line is " << Eco.calcAvgLine(timeTick) << std::endl;
    std::cout << "Maximum of the Economy Class line is " << Eco.getMax() << std::endl;
    std::cout << "AVG for Frequent Class line is " << Freq.calcAvgLine(timeTick) << std::endl;
    std::cout << "Maximum of the Frequent Class line is " << Freq.getMax() << std::endl;
    std::cout << "AVG for First Class line is " << First.calcAvgLine(timeTick) << std::endl;
    std::cout << "Maximum of the First Class line is " << First.getMax() << std::endl << std::endl;
    // AVG of time customer spent in line
    std::cout << "AVG for time spent in Economy Line is " << Eco.calcAvgTime() << std::endl;
    std::cout << "AVG for time spent in Frequent Line is " << Freq.calcAvgTime() << std::endl;
    std::cout << "AVG for time spent in First Line is " << First.calcAvgTime() << std::endl << std::endl;
    // AVG of time service was provided in each line
    std::cout << "AVG Economy Class agent spent is " << ecoClass.calcAvgService() << std::endl;
    std::cout << "AVG Frequent Class agent spent is " << frqClass.calcAvgService() << std::endl;
    std::cout << "AVG First Class agent spent is " << fClass.calcAvgService() << std::endl << std::endl;

    return 0;
}