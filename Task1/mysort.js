 function bubbleSort(arr)
        {
			if (!((typeof(arr) == 'object') && (arr instanceof Array))) 
				{
					throw "You get me not array";
				}
			for(var i=0; i< arr.length;i++)
			{
				for(var j=0;j<arr.length;j++)
					{
						if (arr[i]<arr[j])
						{
							var temp=arr[j];
							arr[j]=arr[i];
							arr[i]=temp;
						}
					}
			}
        }
//Ниже функции для проверки сортировки
//За эталонную сортировку я взял  Sort
//Да для этого лучше всего использовать библиотеку для Unit тестирования.
//Но мне было лениго в ней разбираться. ПОэтому написан небольшой свой велосипед

function runTestsSort()
{
	try
	{
	var numberTest=1;
	_testElAscending();
	numberTest++;
	_testElNotAscending();
	numberTest++;
	_testElAscendingAndEqualsElement();
	numberTest++;
	_testElNotAscendingAndEqualsElement();
	numberTest++
	//_testNoArray();
	//numberTest++;
	}
	catch(e)
	{
		//Это конечно лучше писать в лог
		alert("Тест "+numberTest+" упал");
		return;
	}
	//И это тоже
	alert("Тесты пройдены успешно");
}

function _testElAscending()
{
	var array=new Array(1,2,3,4,5);
	_runTestSortArray(array,bubbleSort)
}
function _testElNotAscending()
{
	var array=new Array(5,4,3,2,1);
	_runTestSortArray(array,bubbleSort);
	
}
function _testElAscendingAndEqualsElement()
{
	var array=new Array(1,2,3,4,4,5);
	_runTestSortArray(array,bubbleSort);
}
function _testElNotAscendingAndEqualsElement()
{
	var array=new Array(5,4,3,2,2,1);
	_runTestSortArray(array,bubbleSort);
	
}
function _testNoArray()
{
	var array=124;
	_runTestSortArray(array,bubbleSort);	
}
function _runTestSortArray(arr,algorithm)
{
	var copy=new Array();
	for(var i=0; i<arr.length;i++)
		{
			copy[i]=arr[i];
		}
	copy.sort();
	algorithm(arr);
	if (copy.length!=arr.length)
	{
		throw "Your algorithm dont work!";	
	}
	for(var i=0;i<copy.length;i++)
	{
		if (copy[i]!=arr[i])
			throw "Your algorithm dont work!";			
	}
	
}