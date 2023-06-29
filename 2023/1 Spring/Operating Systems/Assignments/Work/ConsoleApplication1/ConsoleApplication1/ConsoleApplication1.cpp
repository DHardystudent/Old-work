// Devin Hardy
// Asg 4 
// Barber shop problem with 2 threads, 2 mutexes, and a condition variable

#include <iostream>
#include <string>
#include <random>

class Socket {
public:
    Socket();
    virtual ~Socket();
    // Server initialization
    bool create();
    bool bind(const int port);
    bool listen() const;
    bool accept(Socket&) const;
    //Client initialization
    bool connect(const std::string host, const int port);
    //Data Transmission
    bool send(const std::string) const;
    int recv(std::string&) const;
    void set_non_blocking(const bool);
    bool is_valid() const { return m_sock != -1; }

private:
    int m_sock;
    sockaddr_in m_addr;
};

class ServerSocket : private Socket
{
public:
    ServerSocket(int port);
    ServerSocket() {};
    virtual ~ServerSocket();
    const ServerSocket& operator<< (const std::string&) const;
    const ServerSocket& operator>> (std::string&) const;
    void accept(ServerSocket&);
};







int main()
{
    return 0;
}

