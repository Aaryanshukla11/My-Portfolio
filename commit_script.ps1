$startDate = Get-Date "2024-08-01 10:00:00"
$endDate   = Get-Date "2024-09-30 18:00:00"

$currentDate = $startDate

while ($currentDate -le $endDate) {

    # 3–4 commits per day
    $commitsPerDay = Get-Random -Minimum 3 -Maximum 5

    for ($i = 1; $i -le $commitsPerDay; $i++) {

        Add-Content src\dummy.js "// Aug-Sep commit $i on $($currentDate.ToString('yyyy-MM-dd HH:mm:ss'))"

        git add .

        $commitTime = $currentDate.AddHours($i)

        $env:GIT_AUTHOR_DATE    = $commitTime.ToString("yyyy-MM-dd HH:mm:ss")
        $env:GIT_COMMITTER_DATE = $env:GIT_AUTHOR_DATE

        git commit -m "Update portfolio progress ($($commitTime.ToString('yyyy-MM-dd')))"
    }

    $currentDate = $currentDate.AddDays(1)
}
