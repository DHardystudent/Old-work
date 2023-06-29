def myMax(aList):
    return sorted(aList)[-1]

def avgScores(aTplList):
    scores = {}
    for x in aTplList:
        if x[0] not in scores:
            scores[x[0]]= x[1]
        else:
            scores[x[0]] = (scores[x[0]] + x[1])/2
    print(scores)





something = ["newt", "snake", "bat"]
things = ["Amphibian", "Reptile", "Mammal"]
keyScore = [('smith', 92), ('jones', 89), ('andrews', 90), ('smith', 100)]
ClassThings = {(something[i], things[i]): i for i in range(len(something))}

print(myMax(something))
avgScores(keyScore)