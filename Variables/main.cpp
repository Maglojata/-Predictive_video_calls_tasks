#include <QCoreApplication>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    int integ = 25;
    double dub = 12.5;
    float fl = 2.3;
    char ch = 'M';
    bool b = true;

    qDebug() << integ << dub << fl << ch << b;


    return a.exec();
}
